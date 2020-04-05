var models = require('../model/type');
var shop = require('./../model/shop');
var imagefile = require('./../fileupload');
var exports = module.exports = {};

exports.viewall = function(req,res) {

    models.find(req,function(error,data){
        if(error){
            var error = {msg:'404 Not Found!',errormsg:'Sorry, an error has occured, Requested page fail!'};
            return   res.status(404).json(error);
            
        }else{
            
              var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                    return   data?res.status(200).send(data):res.status(201).send(error);
            
        }
    }).sort({date:-1})
   
  }

  exports.viewbyshopid = function(req,res) {

    shop.find({_id:req.params.id},function(error,data){
        if(error){
            var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
                    return   res.status(201).send(error);
        }
        else{
        models.find({type:data[0].categery},function(error,data){
            if(error){
                var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
                return   res.status(404).send(error);
                
            }else{
                var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
                    return   data[0]?res.status(200).send(data[0]):res.status(201).send(error);
            }
        })
        }
    })


   
  }

  
//create new
exports.create = function(req,res){
    var image_url = [];
    var mainimage_url = '';
    if(req.files){
        mainimage_url = imagefile.imageupload(req.files.mainfile);
         image_url = imagefile.imageuploads(req.files);

    }

    let body=  JSON.parse(req.body.jsonbody);
        var bodydata = new models(body);
        bodydata.images = image_url;
        bodydata.mainimage = mainimage_url;
        bodydata.save(function(err,data) {
            if (err){
                var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
                return  res.status(400).json(error);
            }
            else{
                //console.log(data)
            return  res.status(200).json({...data, token:body.token,msg:'create in success.'});
            }
            
          });

  }
