var models = require('../model/order');
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

    var uploadDBitemlist = [];

     body.forEach(e => {
        var bodydata = new models(body);
        bodydata.item = e;
        bodydata.user =  user
        bodydata.createDate = Date.now();
        bodydata.itemid = e._id;
        bodydata.userid = user._id
        bodydata.sellerid = e.shop[0].userid;
        bodydata.shopid= e.shop[0].shopid;
        bodydata.state = 'new'

        bodydata.save(function(err,data) {
            if (err){
            }
            else{
                uploadDBitemlist.push(e.itemname)
            }
            
          });
     });
     return  res.status(200).json({msg:'order in success.'+uploadDBitemlist});

/*
     console.log(user,body)
        var bodydata = new models(body);
            bodydata.item = body;
            bodydata.user =  user
            bodydata.createDate = Date.now();
            bodydata.itemid = body._id;
            bodydata.userid = user._id
            bodydata.sellerid = ''
            bodydata.shopid=''
            bodydata.state = 'new'
        
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
*/
  }