const Flight = require('../models/flight');

// display a list of all flights in db
async function index (req, res) {
    const flights = await Flight.find({});
    // const test = [];
    // flights.forEach((flight) => test.push(flight.flightNo));
    res.render('flights/index', {
        flights,
        title: 'flights index'
    });
}

// display page with 'new flight' form
function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' });

}

// add a flight to the db from a submitted form
async function create (req, res) {
    if (req.body.departs === '') delete req.body.departs;
 try {
    await Flight.create(req.body);
    console.log(req.body)
    res.redirect('/flights');
  } catch (err) {
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}

async function show (req, res) {
  const thisFlight = await Flight.findById(req.params.id);
  console.log(thisFlight)
  res.render('flights/show', {
    flight: thisFlight
  });
}

module.exports = {
    new: newFlight,
    create,
    index,
    show
  };