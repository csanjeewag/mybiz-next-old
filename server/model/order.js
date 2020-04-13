var mongoose = require('mongoose');

  var SomeModelSchema = new mongoose.Schema({
            itemid:String,
            sellerid: String,
            userid:String,
            shopid:String,
            item:{},
            user:{},
            createDate: Date,
            isvalid:Boolean,
            state:String,

  });
  var SomeModel = mongoose.model('order', SomeModelSchema );

  module.exports = SomeModel;