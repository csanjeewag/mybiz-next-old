var mongoose = require('mongoose');

  var SomeModelSchema = new mongoose.Schema({
            urlname : String,
            itemname: String,
            itemlongname: String,
            categery :String,
            subcategery:String,
            itemPrice: Number,
            itemdiscount:Number,
            content1:String,
            content2:String,
            newitemSpecification:String,
            itemSpecification:[],
            newstockdetail:String,
            stockDetail:[],
            user : {},
            images: [],
            shop:[],
            shopid:String,
            createDate: Date,
            isvalid:Boolean,

  });
  var SomeModel = mongoose.model('item', SomeModelSchema );

  module.exports = SomeModel;
