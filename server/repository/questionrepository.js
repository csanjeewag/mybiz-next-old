var models = require('../model/quaction');
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
            bodydata.a_user = user;
            bodydata.a_Date =  Date.now();
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

  exports.answertoqestion = function(req,res){

    let body=  JSON.parse(req.body.jsonbody);

    var conditon = {_id:req.params.id};
       models.updateOne(conditon,body)
    .then(data=>{
        
        
        return  res.status(200).json({ ...data,token:body.token,msg:'create in success.'});
        
    })
    .catch(err=>{
     
        var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                return  res.status(400).json(error);
    });
       /* var bodydata = new models(body);
            bodydata.a_user = user;
            bodydata.a_Date =  Date.now();
        bodydata.save(function(err,data) {
            if (err){
                var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                return  res.status(400).json(error);
            }
            else{
                //console.log(data)
            return  res.status(200).json({...data, token:body.token,msg:'create in success.'});
            }
            
          }); */

       
  }


  exports.removeansewer = function(req,res){
    let body=  {answer:''}

    var conditon = {_id:req.params.id};
       models.updateOne(conditon,body)
    .then(data=>{
        
        
        return  res.status(200).json({ ...data,token:body.token,msg:'remove answer is success.'});
        
    })
    .catch(err=>{
     
        var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                return  res.status(400).json(error);
    });

  }