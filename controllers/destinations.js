const Flight = require('../models/flight');

async function create (req, res) {

    res.redirect('flights/index');
}

function newDestination (req, res) {
    res.render('flights/destinations/new', {

    })
}
module.exports = {
    new: newDestination,
    create
  };