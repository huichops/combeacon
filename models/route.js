var mongoose = require('mongoose');

var routeSchema = new mongoose.Schema({
  name: String,
  stops: [Number]
});

var Route = mongoose.model('Route', routeSchema);

module.exports = Route;
