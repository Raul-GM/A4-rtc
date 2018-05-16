'use strict';

import request from 'request';
import config from './../../config/environment/development';

const SEARCH_URL = 'https://api.spotify.com/v1/search';

// Retrieve an access token and a refresh token
function getAccessToken(){
  return new Promise((resolve, reject) => {
    if (config.spotify.token !== '') return resolve(); // SI YA EXISTE TOKEN NO LO RECALCULAMOS

    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(config.spotify.clientId + ':' + config.spotify.clientSecret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        config.spotify.token = body.access_token;
        return resolve();
      }

      return reject(error);
    })
  });
}

exports.getImage = (groupName) => {
  return new Promise((resolve, reject)=> {
    getAccessToken().then(() => {
      var options = {
        url: SEARCH_URL,
        qs: {
          query: groupName,
          type: 'artist'
        },
        headers: {
          'Authorization': 'Bearer ' + config.spotify.token
        },
        json: true
      };
      request.get(options,(error, res, body) => {
        if (!error && res.statusCode === 200) {
          return resolve((body.artists.items[0]) ? body.artists.items[0].images : []);
        } else {
          return reject();
        }
      });
    }, (err) => {
      return reject;
    });
  });

}
