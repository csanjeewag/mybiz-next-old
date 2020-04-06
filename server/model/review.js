var mongoose = require('mongoose');

  var SomeModelSchema = new mongoose.Schema({
            itemid:String,
            review: String,
            user:{},
            createDate: Date,
            isvalid:Boolean,

  });
  var SomeModel = mongoose.model('review', SomeModelSchema );

  module.exports = SomeModel;