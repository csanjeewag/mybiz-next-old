var models = require('../model/review');
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

  exports.create = function(req,res){

    let body=  JSON.parse(req.body.jsonbody);
     let user =  JSON.parse(req.body.user);  
     
        var bodydata = new models(body);
            bodydata.user = user;
            bodydata.createDate =  Date.now();
        bodydata.save(function(err,data) {
            if (err){
                var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                return  res.status(400).json(error);
            }
            else{
                //console.log(data)
            return  res.status(200).json({...data, token:body.token,msg:'review added, thank you!'});
            }
            
          });

  }
  exports.delete = function(req,res){
    models.remove({_id: req.params.id}, function(err){
        if (err){
            var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
            return  res.status(400).json(error);
        }
        else{
            //console.log(data)
        return  res.status(200).json({token:body.token,msg:'review deleted!'});
        }
      });

  }

  