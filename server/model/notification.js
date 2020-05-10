var mongoose = require('mongoose');

  var SomeModelSchema = new mongoose.Schema({
            type: String,
            content: String,
            name:String,
            imageUrl : String,
            senderId : String,
            link:String,
            userId:String,
            createDate: Date,
            isvalid:Boolean,
            index:Number

  });
  var SomeModel = mongoose.model('notifications', SomeModelSchema );

  module.exports = SomeModel;
