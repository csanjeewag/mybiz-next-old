var models = require('../model/order');
var shop =  require('./../model/shop');
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

  exports.viewallbystate = function(req,res) {
   
    var request = req.query.state!='all'?{shopid:req.params.id, state:req.query.state }:{shopid:req.params.id};
    models.find(request,function(error,data){
        if(error){
            var error = {msg:'404 Not Found!',errormsg:'Sorry, an error has occured, Requested page fail!'};
            return   res.status(404).json(error);
            
        }else{
            
              var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                    return   data?res.status(200).send(data):res.status(201).send(error);
            
        }
    }).sort({date:-1})
   
  }

  exports.viewallbyUser = function(req,res) {
   
    var request = req.query.state!='all'?{shopid:req.params.id, state:req.query.state }:{shopid:req.params.id};
    models.find(request,function(error,data){
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


     body.forEach(e => {

        shop.findOne({_id:e.shop[0].shopid})
        .exec(function(err,shop){
            if(err){

            }else{
                shopDetails = shop
                var bodydata = new models(body);
                bodydata.item = e;
                bodydata.user =  user
                bodydata.createDate = Date.now();
                bodydata.itemid = e._id;
                bodydata.userid = user._id
                bodydata.sellerid = e.shop[0].userid;
                bodydata.shopid= e.shop[0].shopid;
                bodydata.state = 'new';
                bodydata.shop = shop;
                bodydata.userMsg = e.userMsg;
                e.userMsg = null;
                bodydata.save(function(err,data) {
                    
                  });
            }
        })



     });
     return  res.status(200).json({msg:'order in success.'});

  }

  exports.update = function(req,res){

    let body=  JSON.parse(req.body.jsonbody);
    var conditon = {_id:req.params.id};
       models.updateOne(conditon,body)
    .then(data=>{
        
        
        return  res.status(200).json({ msg:'success.'});
        
    })
    .catch(err=>{
     
        var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                return  res.status(400).json(error);
    });

       
  }