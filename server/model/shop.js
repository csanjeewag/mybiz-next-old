var mongoose = require('mongoose');

  var SomeModelSchema = new mongoose.Schema({
            urlname:String,
            shopName: String,
            shoplongName:String,
            categery :String,
            district:String,
            town:String,
            address:String,
            contact1:String,
            contact2:String,
            content1:String,
            content2:String,
            newshopdetail:String,
            shopDetail:[],
            user : {},
            images: [],
            createDate: Date,
            isvalid:Boolean,
    
  });
  var SomeModel = mongoose.model('shop', SomeModelSchema );

  module.exports = SomeModel;
