var mongoose = require('mongoose');

  var SomeModelSchema = new mongoose.Schema({
            itemid:String,
            question: String,
            answer: String,
            q_user : {},
            a_user:{},
            a_Date: Date,
            q_Date: Date,
            isvalid:Boolean,

  });
  var SomeModel = mongoose.model('question', SomeModelSchema );

  module.exports = SomeModel;
