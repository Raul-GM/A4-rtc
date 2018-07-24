import mongoose from 'mongoose';
mongoose.set('debug', true);
let DateSchema = new mongoose.Schema({
  _id: String,
  image: {
    big: String,
    small: String,
  },
  name: String,
  visible: Boolean,
  dates: [{
    tour: String,
    date: String, //TODO pasar a tipo date
    hour: String,
    city: String,
    price: String,
    place: {
      name: String,
      url: String
    },
    phone: String
    // Podríamos poner urls a noticias relacionadas con dichos conciertos
  }]
});

module.exports = mongoose.model('Date', DateSchema);
