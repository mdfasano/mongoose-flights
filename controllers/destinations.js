const Flight = require('../models/flight');

async function create (req, res) {
    const thisFlight = await Flight.findById(req.params.id);
    thisFlight.destinations.push(req.body);
    console.log(thisFlight)
    try {
        await thisFlight.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect('/flights');
}

function newDestination (req, res) {
    res.render('flights/destinations/new', {
        flightId: req.params.id
    });
}
module.exports = {
    new: newDestination,
    create
  };