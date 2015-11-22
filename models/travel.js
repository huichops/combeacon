var mongoose = require('mongoose');

var travelSchema = new mongoose.Schema({
  user: Number,
  route: {
    major: Number,
    minor: Number,
  },
  checkin: {
    stop: Number,
    time: { type: Date, default: Date.now }
  },
  checkout: {
    stop: Number,
    time: { type: Date, default: Date.now }

  }
});

var Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;
