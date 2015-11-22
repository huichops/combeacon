var Travel = require('../models/travel');

var checkin = function(args, callback) {
  if (!args || !args.user || !args.route || !args.checkin) {
    throw new Error('Invalid Arguments');
  }

  var travel = new Travel(args);

  travel.save(callback);
}

module.exports = checkin;
