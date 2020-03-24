var models = require('../model/user');

var exports = module.exports = {};

exports.viewall = function(req,res) {

    models.find(req,function(error,data){
        if(error){
            return   res.status(404).json('error');
            
        }else{
            
              return   res.status(200).json(data);
            
        }
    }).sort({date:-1})
   
  }

  exports.create = function(req,res){

    let body=  JSON.parse(req.body.jsonbody);
         
        
        var bodydata = new models(body);
        models.find({email:bodydata.email},function(error,data){
            if(!data.length){
                bodydata.save(function(err,result) {
                    if (err){
                      
                        return  res.status(400).json(result);
                    }
                    else{
                        
                    return  res.status(200).json(result);
                    }
                    
                  });
            }
            else{
                return  res.status(401).json('you already signed');
            }
        })

  }


  
  exports.signinuser = function(req,res){

    let body=  JSON.parse(req.body.jsonbody);
         
        
        var bodydata = new models(body);
        models.find({email:bodydata.email},function(error,data){
            if(data.length){
                        
                    return  res.status(200).json(data);
            }
            else{
                return  res.status(401).json('you havent account');
            }
        })

    }