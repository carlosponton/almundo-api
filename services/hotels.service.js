const Hotel = require('../models/hotels.model');

class HotelService {

  /**
   * Find all hotels
   * @returns {*}
   */
  getHotelsList() {
    return Hotel.find();
  }

  /**
   * Find hotel by id
   * @param id
   * @returns {*}
   */
  getHotelById(id) {
    return Hotel.findById(id);
  }
}

module.exports = new HotelService();
