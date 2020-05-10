var models = require('../model/quaction');
var item = require('./../model/item');
var notificationRepository = require('./notificationRepository');
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

            //notification 
            item.findOne({_id:data.itemid},function(err,item){
                if(item){
                    var notificationdata = {
                        type: 'question',
                        content:  'customer ask question about '+item.itemname+'. (click here)',
                        name: user.name,
                        imageUrl : user.imageUrl,
                        link: '/item/'+item.urlname,
                        userId: user._id,
                        senderId:item.user._id,
                        index:100
                    }
                    notificationRepository.createNotification(notificationdata);
                }
            })     
            /////////

            return  res.status(200).json({...data, token:body.token,msg:'question added!'});
            }
            
          });

  }

  exports.answertoqestion = function(req,res){

    let body=  JSON.parse(req.body.jsonbody);

    var conditon = {_id:req.params.id};
       models.updateOne(conditon,body)
    .then(data=>{
           //notification
        models.findOne({_id:req.params.id}, function(err,qa){
            if(qa){
          
            item.findOne({_id:qa.itemid},function(err,item){
                if(item){
                    var notificationdata = {
                        type: 'answer',
                        content:  'seller answer to question on '+item.itemname+'. (click here)',
                        name: item.user.name,
                        imageUrl : item.user.imageUrl,
                        link: '/item/'+item.urlname,
                        userId: item.user._id,
                        senderId:qa.a_user._id,
                        index:100
                    }
                    notificationRepository.createNotification(notificationdata);
                }
            })     
            }
        })
        //////////////
        
        return  res.status(200).json({ ...data,token:body.token,msg:'answer added!'});
        
    })
    .catch(err=>{
     
        var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                return  res.status(400).json(error);
    });

       
  }


  exports.removeansewer = function(req,res){
    let body=  {answer:''}

    var conditon = {_id:req.params.id};
       models.updateOne(conditon,body)
    .then(data=>{
        
        
        return  res.status(200).json({ ...data,token:body.token,msg:'removed answer.'});
        
    })
    .catch(err=>{
     
        var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                return  res.status(400).json(error);
    });

  }
  