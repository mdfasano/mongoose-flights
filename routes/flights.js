const express = require('express');
const flightsController = require('../controllers/flights');
const router = express.Router();

//index route
router.get('/', flightsController.index);
// route to show input form for adding new flight
router.get('/new', flightsController.new);
// route to create new flight in db
router.post('/', flightsController.create);

module.exports = router;
