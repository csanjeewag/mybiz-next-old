var models = require('../model/shop');
var imagefile = require('./../fileupload');
var exports = module.exports = {};

//get all
exports.viewall = function(req,res) {

    models.find(req,function(error,data){
        if(error){
            return   res.status(404).json('error');
            
        }else{
            
              return   res.status(200).json(data);
            
        }
    }).sort({date:-1})
   
  }
// get one by name
  exports.viewbyname = function(req,res) {

    models.find(req,function(error,data){
        if(error){
            return   res.status(404).send('error');
            
        }else{
            var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
                return   data[0]?res.status(200).send(data[0]):res.status(201).send(error);
        }
    }).sort({date:-1})
   
  }

//create new
  exports.create = function(req,res){
    var image_url = [];
    if(req.files){

         image_url = imagefile.imageuploads(req.files);

    }

    let body=  JSON.parse(req.body.jsonbody);
     body.user =  JSON.parse(req.body.user);  
        var bodydata = new models(body);
        bodydata.images = image_url;
        bodydata.save(function(err,data) {
            if (err){
              
                return  res.status(400).json({msg:'shop create in fails.'});
            }
            else{
                //console.log(data)
            return  res.status(200).json({...data, token:body.token,msg:'create in success.'});
            }
            
          });

  }
