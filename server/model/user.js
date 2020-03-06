var mongoose = require('mongoose');

  var SomeModelSchema = new mongoose.Schema({
    a_string: String,
    a_date: Date
  });
  var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

  module.exports = SomeModel;
