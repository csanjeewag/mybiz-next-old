var models = require('../model/item');
var shop = require('../model/shop');
var imagefile = require('./../fileupload');
var exports = module.exports = {};

exports.viewall = function(req,res) {

    models.find(req,function(error,data){
        if(error){
            return   res.status(404).json('error');
            
        }else{
            
            var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
           // return   data.length>0?res.status(200).send(data):res.status(201).send(error);
            return res.status(200).send(data)
        }
    }).sort({date:-1})
   
  }

  exports.viewbyname = function(req,res) {

    models.find(req,function(error,data){
        if(error){
            return   res.status(404).send({msg:'there is a error'});
            
        }else{
            var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
                return   data[0]?res.status(200).send(data[0]):res.status(201).send(error);
        }
    })
   
  }

  exports.create = function(req,res){

   var sh = JSON.parse(req.body.shop)
    shop.find({_id:sh.shopid,'user._id':sh.userid},function(error,shopdata){
if(error){
    //if not valid
    return  res.status(400).json({msg:'new items create in fails. your account is not valid.'});
            
        }
else{
    //if valid
            var image_url = [];
    if(req.files){

         image_url = imagefile.imageuploads(req.files);

    }

    let body=  JSON.parse(req.body.jsonbody);
    let user = JSON.parse(req.body.user);
        var bodydata = new models(body);
        bodydata.images = image_url;
        bodydata.shop = {...JSON.parse(req.body.shop)};
        bodydata.shopid = JSON.parse(req.body.shop).shopid;
        bodydata.user = {...user._id,...user.name,...user.email,...user.imageUrl};
        bodydata.save(function(err,data) {
            if (err){
              
                return  res.status(400).json({msg:'new items create in fails.'});
            }
            else{
                //console.log(data)
            return  res.status(200).json({...data, token:body.token,msg:'item create in success.'});
            }
            
          });
        }
    })


   
  }


