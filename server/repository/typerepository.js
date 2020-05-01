var models = require('../model/type');
var shop = require('./../model/shop');
var item = require('./../model/item');
var imagefile = require('./../filespecial');
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
    }).sort({index:1,createDate:-1})
   
  }

  //get sub catagory by shop id
  exports.viewbyshopid = function(req,res) {

    shop.find({_id:req.params.id,index: {$gt:0} },function(error,data){
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
    }).sort({index:1,createDate:-1})


   
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

  
exports.update = function(req,res){

    
    let body=  JSON.parse(req.body.jsonbody);
    var removeimages = {
        files:req.files,
        deleteimages:body.deleteimages,
        images : body.images
    }
    //get file count only update main image or cover image
    var filecount = 0;
    var mainimage_url = '';
    if(req.files&&req.files.mainfile){
        mainimage_url = imagefile.imageupload(req.files.mainfile);
        body.mainimage=mainimage_url;
  
    }else{
    while(removeimages.files){
        if(removeimages.files.image[filecount]){
            filecount=filecount+1;
        }else{
            filecount =filecount>0?filecount:1;
            break;
        }
    }
    if((filecount+removeimages.images.length-removeimages.deleteimages.length)>3){
      
        return  res.status(201).json({status:200, msg:'your submition fail !, because total file count than three(3). please remove some file.'});
    }

    var image_url = imagefile.deleteimage(removeimages);

    body.images = [...image_url ];
    }
    //change main image
    
    //

    if(body.changesubtype.length>3){

        var subbody = {subcategery:body.changesubtype}
        if(body.changetype.length>3){
            subbody = {...subbody, categery:body.changetype}
        }
        item.updateMany({subcategery:body.previoussubtype},subbody, function(error,data){ });

        var subtype = body.subtype;
            subtype.find(function(e){
            if(e.type == body.previoussubtype){
                e.type = body.changesubtype;
            }
       });
        body.subtype = subtype;
    }
    if(body.changetype.length>3){

        var subbody = {categery:body.changetype}
        shop.updateMany({categery:body.type},subbody, function(error,data){ });
        body.type = body.changetype;
    }

   
        models.findOneAndUpdate({_id:req.params.id},body, function(error,data){
            if(error){
                var error = {status:400, msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                return  res.status(400).json(error);
            }
            else{
                return  data?res.status(200).json({status:200,msg:'updated.'}):res.status(201).json({status:201,msg:'sorry, you are not permitted to update.'}) ;
        
            }

        })
}


exports.updateCategery = function(req,res){


    var body = {categery:'mobile-phone-accessories'}
    shop.updateMany({categery:'mobile-phone'},body, function(error,data){
        if(error){
            var error = {status:400, msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
           // return  res.status(400).json(error);
        }
        else{
          //  return  data?res.status(200).json({status:200,msg:'updated.',data}):res.status(201).json({status:201,msg:'sorry, you are not permitted to update.'}) ;
    
        }

    });

    item.updateMany({categery:'mobile-phone'},body, function(error,data){
        if(error){
            var error = {status:400, msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
            return  res.status(400).json(error);
        }
        else{
            return  data?res.status(200).json({status:200,msg:'updated.',data}):res.status(201).json({status:201,msg:'sorry, you are not permitted to update.'}) ;
    
        }

    });

}