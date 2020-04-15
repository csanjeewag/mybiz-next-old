var models = require('../model/shop');
var items = require('./../model/item');
var imagefile = require('./../fileupload');
var mongoose = require('mongoose');
var exports = module.exports = {};

//get all
exports.viewall = function(req,res) {

    models.find(req,function(error,data){
        if(error){
            var error = {msg:'404 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
            return   res.status(404).send(error);
            
        }else{
            
            var error = {msg:'405 Not Found!',errormsg:'Sorry, there are no shops!'};
            return   data.length>0?res.status(200).send(data):res.status(201).send(error);
            
        }
    }).sort({date:-1})
   
  }

// get one by name
  exports.viewbyname = function(req,res) {

    models.find(req,function(error,data){
        if(error){
            var error = {msg:'404 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
            return   res.status(404).send(error);
            
        }else{
            var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
                return   data[0]?res.status(200).send(data[0]):res.status(201).send(error);
        }
    }).sort({date:-1})
   
  }

  // get shop belog to user
  exports.viewbyusername = function(req,res) {

    models.find({'user._id': req.params.id},function(error,data){
        if(error){
            var error = {msg:'404 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
            return   res.status(404).send(error);
            
        }else{
            var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
                return   data?res.status(200).send(data):res.status(201).send(error);
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
                var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                return  res.status(400).json(error);
            }
            else{
                //console.log(data)
            return  res.status(200).json({...data, token:body.token,msg:'create in success.'});
            }
            
          });

  }


  //get shop and items by shop id or url name
exports.viewshopanditems = function(req,res) {

    models.find({_id:req.params.id},function(error,shopdata){
        if(error){
            /*** if there non id */
            models.find({urlname:req.params.id},function(error,shopdata){
                if(error){
        
                    var error = {msg:'404 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                    return  res.status(404).json(error);
                    
                }else{
                    
                    if(shopdata[0]){
                    //check is there more url name
                            var index =  shopdata.findIndex(function(e){
                                    return e._id == req.query.ide
                                })
                            index = index>0?index:0;
                    items.find({shopid:shopdata[index]._id},function(error,data){
                        if (error){
                            var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                            return  res.status(400).json(error);
                        }
                        else{
                            //console.log(data)
                        return  res.status(200).json({items:data, shop:shopdata[index],msg:'success.'});
                        }
                    })
                    }else{
                        var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                        return  res.status(201).json(error);   
                    }
                    
                }
            }).sort({date:-1})
            
        }else{
            if(shopdata[0]){
            items.find({shopid:shopdata[0]._id},function(error,data){
                if (error){
                    var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                    return  res.status(400).json(error);
                }
                else{
                    //console.log(data)
                return  res.status(200).json({items:data, shop:shopdata[0],msg:'success.'});
                }
            })
            }else{
                var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                return  res.status(201).json(error);
            }
            
        }
    }).sort({date:-1})
   
  }



  //update shop details
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

