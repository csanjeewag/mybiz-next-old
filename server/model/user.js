var mongoose = require('mongoose');

  var SomeModelSchema = new mongoose.Schema({
    name: String,
    email:String,
    address : String,
    contact : String,
    imageUrl:String,
    googleId:String,
    givenName:String,
    familyName:String,
    role:String,
    isseller:Boolean,
    createDate: Date,
    isvalid:Boolean,
    
  });
  var SomeModel = mongoose.model('user', SomeModelSchema );

  module.exports = SomeModel;
