const express = require('express');
const router = express.Router();
const HotelService = require('../services/hotels.service.js');

/* GET hotel list. */
router.get('/', function(req, res, next) {
  HotelService.getHotelsList()
    .then((hotels) => {
      res.status(200).json({
        status: 'succesful',
        hotels
      });
    })
    .catch((error) => {
      return res.status(500).json({status: 'error', message: 'INTERNAL_SERVER_ERROR'});
    });
});

/* GET hotel by id. */
router.get('/:id', function(req, res, next) {
  const { id } = req.params;
  HotelService.getHotelById(id)
    .then((hotel) => {
      res.status(200).json({
        status: 'succesful',
        hotel
      });
    })
    .catch(() => {
      return res.status(500).json({status: 'error', message: 'INTERNAL_SERVER_ERROR'});
    });
});

module.exports = router;
