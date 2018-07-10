'use strict';

import Spotify from './../../components/Spotify';
import Date from './../../models/dates';
import feed from 'feed-read';
import request from 'request';
import cheerio from 'cheerio';
import _ from 'lodash';
import moment from 'moment';

let getDateMC = (date) => {
  return moment(date);
}

let getField = (field, article) => {
  let tag = '</strong>';
  let search = field + ':';
  if(article.indexOf(search) === -1) return ''; //Si no encuentra el tag de búsqueda, devolvemos vacío
  if(field === 'Ubicación') { //Si el campo requerido es Ubicación, intentamos separar el nombre de la url
    let articleUpdated = {
      name: '',
      url: ''
    };
    let place = article.substr(article.indexOf(search) + search.length + tag.length);
    place = place.substr(0, place.indexOf('</li>')).trim().toLowerCase();
    if(place.indexOf('href=') === -1) {
      articleUpdated.name = place;
    } else {
      //articleUpdated.name = place.substr(place.indexOf('>')+1, 4);
      articleUpdated.name = place.substring(place.indexOf('>')+1, place.length-4);
      articleUpdated.url = place.substr(place.indexOf('href=')+6, (place.indexOf('" tar') - 10));
    }
    return articleUpdated;
  }
  let articleUpdated = article.substr(article.indexOf(search) + search.length + tag.length);
  articleUpdated = articleUpdated.substr(0, articleUpdated.indexOf('</li>')).trim().toLowerCase();
  if(field === 'Fecha') {
    articleUpdated = getDateMC(articleUpdated);
  }
  return articleUpdated;
};

/*
* Buscamos en la base de datos un grupo
*/
let findGroup = (name) => {
  return new Promise((resolve, reject) => {
    Date.findOne({ name }).then(
      (group) => resolve(group),
      (err) => reject()
    );
  });
};

/*
* Leemos la web de Metal Cry
* */
let readMC = () => {
  return new Promise((resolve, reject)=> {
    const mcConcerts = 'http://www.metalcry.com/?feed=gigpress';
    let groups = [];
    let group = {};
    let name = '';
    let found = {};
    feed(mcConcerts, (err, articles) => {
      articles.forEach((article)=> {
        name = {name: getField('Grupo', article.content)};
        found =  _.find(groups, name);
        if(found !== undefined) {
          found.dates.push({
            tour: getField('Gira', article.content),
            date: getField('Fecha', article.content),
            hour: getField('Hora', article.content),
            city: getField('Ciudad', article.content),
            price: getField('Precio', article.content),
            place: getField('Ubicación', article.content),
            phone: getField('Teléfono', article.content)
          });
        } else {
          group = {
            _id: getField('Grupo', article.content).split(' ').join(''),
            name: getField('Grupo', article.content),
            dates: [{
              tour: getField('Gira', article.content),
              date: getField('Fecha', article.content),
              hour: getField('Hora', article.content),
              city: getField('Ciudad', article.content),
              price: getField('Precio', article.content),
              place: getField('Ubicación', article.content),
              phone: getField('Teléfono', article.content)
            }]
          };
          groups.push(group);
        }
      });
      resolve(groups);
    });
  });
};

let filterDateBefore = (dates) => {
  const now = moment();
  let filteredDates = [];
  dates.forEach((date) => {
    if(now.isBefore(date.date)) {
      filteredDates.push(date);
    }
  });
  return filteredDates;
}
export function getAllGroups(req, res) {
  return new Promise((resolve, reject) => {
    Date.find()
      .then(groups => {
        return resolve(res.status(200).json(groups))
      },err => {
        reject(res.status(500).json(err));
      });
  });
}
export function getAllDates(req, res) {
  return new Promise((resolve, reject)=> {
    Date.find().then((dates) => {
      let filteredDates = [];
      dates.forEach((date) => {
        let resultDates = filterDateBefore(date.dates);
        if(resultDates.length > 0) {
          filteredDates.push({
            _id: date._id,
            name: date.name,
            image: date.image,
            dates: resultDates
          });
        }
      });

      return resolve(res.status(200).json(filteredDates));
    },err => {
      reject(res.status(500).json(err));
    });
  });
}

export function getDate(req, res) {
  const _id = req.params.id;
  return new Promise((resolve, reject)=> {
    Date.find({_id}).then((date) => {
      return resolve(res.status(200).json(date[0]));
    },err => {
      reject(res.status(500).json(err));
    });
  });
}

export function deleteAll(req, res) {
  console.log('==> Limpiamos todas las fechas');
  return new Promise((resolve, reject) => {
    Date.remove({}).then(
      () => { return resolve(res.status(200).json()); },
      (err) => { return reject(res.status(500).json(err)); }
    );
  });
}
function isDateDuplicated(allDates, date) {
  return allDates.find(dateToFind => date.isSame(dateToFind.date))
}
export function loadMC(req, res) {
  console.log('==> Cargamos todas las fechas');
  return new Promise((resolve, reject) => {
    let promises = [];
    readMC().then((dates)=> {
      dates.forEach((d, i)=> {
        findGroup(d.name).then(
          (group) => {
            if(!group) promises.push(Date.create(d)); //Si no existe el grupo en la base de datos creamos una nueva entrada completa
            else {
              d.dates.forEach( (date, j) => {
                if(!isDateDuplicated(group.dates, date.date)) {
                  promises.push(Date.findOneAndUpdate({_id: d._id}, {$push: { dates: date }}, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec());
                }
              });
            }
          },
          (err) => {
          }
        );

      });
      Promise.all(promises).then(
        ()=> { return resolve(res.status(200).json()); },
        (err)=> { return reject(res.status(500).json(err)); }
      );
    });
  });
}
export function updateGroup(req, res) {
  console.log('==> Actualizamos grupo', req.params, req.body, req.query)
  const { id } = req.params;
  return new Promise((resolve, reject) => {
    console.log(')>', req.query.name)
    Date.findOneAndUpdate({
      _id: id},
      {$set: { name: req.query.name }},
      {new: false, upsert: true, setDefaultsOnInsert: true, runValidators: true})
        .exec().then(
          ()=> { return resolve(res.status(200).json()); },
          (err)=> {
            console.log('!!!!!!!>', err);
            return reject(res.status(500).json(err));
          })
  })
}
export function updateAllImages(req, res) {
  console.log('==> Actualizamos todas las imágenes');
  return new Promise((resolve, reject) => {
    Date.find().then((dates) => {
      // return resolve(res.status(200).json(dates));
      let promises = [];
      dates.forEach((date) => {
        promises.push(Spotify.getImage(date.name));
      });
      Promise.all(promises).then(
        (images) => {
          let imagesPromises = [];
          images.forEach((image, index)=> {
            let date = dates[index];
            // date.image = image;
            promises.push(Date.findOneAndUpdate({_id: date._id}, {$push: { image: image }}, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec());

          });
          Promise.all(imagesPromises).then(
            () => { return resolve(res.status(200).json()); },
            (err) => { res.status(500).json(err); }
          )
        },err => {
          return reject(res.status(500).json(err));
        });
    },err => {
      reject(res.status(500).json(err));
    });
  });
};
