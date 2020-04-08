var mongoose = require('mongoose');

  var SomeModelSchema = new mongoose.Schema({
            district:String,
            town: [],
            Date: Date,
            isvalid:Boolean,

  });
  var SomeModel = mongoose.model('location', SomeModelSchema );

  module.exports = SomeModel;
