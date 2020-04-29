var models = require('../model/location');
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

  exports.update = function(req,res){
    let body=  JSON.parse(req.body.jsonbody);
    models.findOneAndUpdate({_id:req.params.id,'user.email':JSON.parse(req.body.user).email},body, function(error,data){
        if(error){
            var error = {status:400,msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
            return  res.status(400).json(error);
        }
        else{
            return  data?res.status(200).json({status:200,msg:'updated, thank you!.'}):res.status(201).json({status:201,msg:'sorry, you are not permitted to update.'}) ;
        
        }

    }) 
}