import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const datesSchema = new Schema({
  _id: {type: string},
  name: {type: string},
  shows: [{
    tour: {type:string},
    date: {type:string},
    hour: {type:string},
    city: {type:string},
    price: {type:string},
    phone: {type:string},
    _id: {type:string},
    place: {
      place: {type:string},
      url: {type:string}
    }
  }]
});

module.exports = mongoose.model('Dates', datesSchema);
