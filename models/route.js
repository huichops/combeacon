var mongoose = require('mongoose');

var routeSchema = new mongoose.Schema({
  name: String,
  stops: [{
    minor: Number,
    name: String
  }]
});

var Route = mongoose.model('Route', routeSchema);

module.exports = Route;
