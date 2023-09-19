const express = require('express');
const destinationsController = require('../controllers/destinations');
const router = express.Router();

router.get('/flights/:id/destinations/new', destinationsController.new);
router.post('/:id/destinations/create', destinationsController.create);

module.exports = router;