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
    console.log(req.query.ide)
    models.find({itemlongname:req.params.id},function(error,data){
        if(error){
            return   res.status(404).send({msg:'there is a error'});
            
        }else{
            var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
            if(data.length>1)
            {
              var index =  data.findIndex(function(e){
                    return e._id == req.query.ide
                })
                return   data[index]?res.status(200).send(data[index]):res.status(200).send(data[0]);
            }else{
                return   data[0]?res.status(200).send(data[0]):res.status(201).send(error);
            }
                
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


//for favorite
exports.viewforfavorite = function(req,res) {
    var fav = req.query.fav.split(',');
    models.find({'_id': { $in: fav}},function(error,data){
        if(error){
            return   res.status(404).json('error');
            
        }else{
            
            var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
           // return   data.length>0?res.status(200).send(data):res.status(201).send(error);
            return res.status(200).send(data)
        }
    }).sort({date:-1})
   
  }

  exports.update = function(req,res){
 
 
     let body=  JSON.parse(req.body.jsonbody);
     var removeimages = {
         files:req.files,
         deleteimages:body.deleteimages,
         images : body.images
     }
     //get file count
     var filecount = 0 
     while(removeimages.files){
         if(removeimages.files.image[filecount]){
             filecount=filecount+1;
         }else{
             filecount =filecount>0?filecount:1;
             break;
         }
     }
     if((filecount+removeimages.images.length-removeimages.deleteimages.length)>3){
       
         return  res.status(201).json({msg:'your submition fail !, because total file count than three(3). please remove some file.'});
     } 
     //
    var image_url = imagefile.deleteimage(removeimages);
 
     body.images = [...image_url ]
      body.user =  JSON.parse(req.body.user);  
         models.findOneAndUpdate({_id:req.params.id},body, function(error,data){
             if(error){
                 var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                 return  res.status(400).json(error);
             }
             else{
                 return  res.status(200).json({msg:'create in success.'});
             }
 
         })
 
   }
 