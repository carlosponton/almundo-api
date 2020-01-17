const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  name: String,
  stars: String,
  images: [String],
  price: String,
  city: String,
  latitude: String,
  longitude: String,
  availability: String
});

module.exports = mongoose.model('hotels', hotelSchema);
