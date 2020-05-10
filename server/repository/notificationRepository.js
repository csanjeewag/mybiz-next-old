var models = require('../model/notification');
var auth = require('./../auth');

var exports = module.exports = {};

exports.viewall = function(req,res) {

    models.find(req,function(error,data){
        if(error){
            
            return   res.status(404).json('error');
            
        }else{
            
              return   res.status(200).json(data);
            
        }
    }).sort({index:1,createDate:-1})
   
  }

    

  exports.update = function(req,res){

    models.updateOne({_id:req.params.id},body, function(error,data){
        if(error){
            var error = {status:400, msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
        }
        else{
            return  data?res.status(200).json({status:200,msg:'updated.',data}):res.status(201).json({status:201,msg:'sorry, you are not permitted to update.'}) ;
    
        }

    });

}

exports.delete = function(req,res){

    models.deleteOne({_id:req.params.id}, function(error,data){
        if(error){
            var error = {status:400, msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
        }
        else{
            return  data?res.status(200).json({status:200,msg:'updated.',data}):res.status(201).json({status:201,msg:'sorry, you are not permitted to update.'}) ;
    
        }

    });

}

//create new
exports.create = function(req,res){

    let body=  JSON.parse(req.body.jsonbody);
        var bodydata = new models(body);
        bodydata.createDate= Date.now(),
        bodydata.isvalid=true;
        bodydata.save(function(err,data) {
            if (err){
                var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
                return  res.status(400).json(error);
            }
            else{
                //console.log(data)
            return  res.status(200).json({...data, msg:'create in success.'});
            }
            
          });

  }

  //create new
exports.createNotification = function(req,res){

        var bodydata = new models(req);

            bodydata.type=req.type?req.type:'admin';
            bodydata.content=req.content
            bodydata.name = req.name;
            bodydata.imageUrl = req.imageUrl;
            bodydata.senderId = req.senderId;
            bodydata.link = req.link;
            bodydata.userId= req.userId?req.userId:'';
            bodydata.senderId= req.senderId;
            bodydata.createDate =  Date.now(),
            bodydata.isvalid =  true;
            bodydata.index = req.index;

        bodydata.save(function(err,data) {
            if (err){
            //    var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
               
            }
            else{
                //console.log(data)
           // return  res.status(200).json({...data, msg:'create in success.'});
            }
            
          });

  }
