var models = require('../model/user');
var auth = require('./../auth');

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
        bodydata.createDate=Date.now(),
        bodydata.isvalid = true,
        bodydata.shopcount=2;
        models.find({email:bodydata.email},function(error,data){
            if(!data.length){
                bodydata.save(function(err,data) {
                    if (err){
                      
                        return  res.status(400).json({msg:'Sign up fails.',status:404});
                    }
                    else{
                        var token = auth.createtoken(bodydata);
                        return  res.status(200).json({...data._doc, token:token,msg:'Sign in success.',status:200});
                    }
                    
                  });
            }
            else{
                var updatemodel = {name:bodydata.name, address:bodydata.address,contact:bodydata.contact,
                givenName:bodydata.givenName,familyName:bodydata.familyName,isseller:bodydata.isseller,imageUrl:bodydata.imageUrl};
               
                models.findOneAndUpdate({email:bodydata.email},updatemodel, function(error,user){
                    if(error){
                        var error = {status:400, msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                        return  res.status(400).json(error);
                    }
                    else{
                        var token = auth.createtoken(bodydata);
                        return  res.status(200).json({...user._doc, token:token,msg:'You have aleady account, it updated.',status:200});
                
                    }
        
                })
               // return  res.status(401).json({msg:'There are error.',status:404});
            }
        })

  }


  
  exports.signinuser = function(req,res){

    let body=  JSON.parse(req.body.jsonbody);
         
        
        var bodydata = new models(body);
        models.find({email:bodydata.email},function(error,data){
            if(data.length){
                var token = auth.createtoken(bodydata);     
                    return  res.status(200).json({...data[0]._doc, token:token,msg:'Sign in success.',status:200})
            }
            else{
                return  res.status(401).json({msg:"You haven't account, please sign up.",status:401});
            }
        })

    }