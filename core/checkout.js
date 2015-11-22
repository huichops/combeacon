var Travel = require('../models/travel');

var checkout = function(args, callback) {
  var query;
  console.log(args);
  if (!args || !args.checkout || !args._id) {
    throw new Error('Invalid Arguments');
  }

  var query = {
    _id: args._id
  };

  Travel.update(query, {$set: { checkout: args.checkout }}, callback);

}

module.exports = checkout;
