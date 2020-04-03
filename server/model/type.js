var mongoose = require('mongoose');

  var SomeModelSchema = new mongoose.Schema({
            type: String,
            name: String,
            content1 : String,
            subtype :[],
            images: [],
            mainimage:String,
            createDate: Date,
            isvalid:Boolean,

  });
  var SomeModel = mongoose.model('type', SomeModelSchema );

  module.exports = SomeModel;
