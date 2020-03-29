var models = require('../model/shop');

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
     body.user =  JSON.parse(req.body.user);  
      //  console.log(req.files)
        var bodydata = new models(body);
        bodydata.save(function(err,data) {
            if (err){
              
                return  res.status(400).json({msg:'shop create in fails.'});
            }
            else{
                console.log(data)
            return  res.status(200).json({...data, token:body.token,msg:'create in success.'});
            }
            
          });

  }
