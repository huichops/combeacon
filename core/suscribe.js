var mongoose = require('mongoose');
var suscribe = function() {
   return { id: mongoose.Types.ObjectId() };
}

module.exports = suscribe;
