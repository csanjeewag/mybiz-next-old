var mongoose = require('mongoose');

  var SomeModelSchema = new mongoose.Schema({
            district:String,
            town: [],
            createDate: Date,
            isvalid:Boolean,
            index:Number,

  });
  var SomeModel = mongoose.model('location', SomeModelSchema );

  module.exports = SomeModel;
