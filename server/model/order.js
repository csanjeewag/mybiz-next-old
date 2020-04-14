var mongoose = require('mongoose');

  var SomeModelSchema = new mongoose.Schema({
            itemid:String,
            sellerid: String,
            userid:String,
            shopid:String,
            item:{},
            user:{},
            shop:{},
            createDate: Date,
            isvalid:Boolean,
            state:String,
            userMsg : String,
            sellerMsg : String

  });
  var SomeModel = mongoose.model('order', SomeModelSchema );

  module.exports = SomeModel;