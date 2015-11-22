var mongoose = require('mongoose');

var beaconSchema = new mongoose.Schema({
  uuid: String,
  major: Number,
  minor: Number
});

var Beacon = mongoose.model('Beacon', beaconSchema);

module.exports = Beacon;
