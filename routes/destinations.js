const express = require('express');
const destinationsController = require('../controllers/destinations');
const router = express.Router();

router.get('/:id/destinations/new', destinationsController.new);

module.exports = router;