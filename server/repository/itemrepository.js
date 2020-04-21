var models = require('../model/item');
var shop = require('../model/shop');
var imagefile = require('./../fileupload');
var exports = module.exports = {};

exports.viewall = function(req,res) {

    models.find(req,function(error,data){
        if(error){
            return   res.status(404).json('error');
            
        }else{
            
            var error = {msg:'405 Not Found!',errormsg:'Sorry, there are no shops!'};
            return   data.length>0?res.status(200).send(data):res.status(201).send(error);
        }
    }).sort({mIndex:1, sIndex:1,createDate:-1})
   
  }

  // view items by urlname
  exports.viewbyname = function(req,res) {
    
    models.find({urlname:req.params.id,isvalid:true,isvalidA:true},function(error,data){
        if(error){
            return   res.status(404).send({msg:'there is a error'});
            
        }else{
            var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
            if(data.length>1)
            {
              var index =  data.findIndex(function(e){
                    return e._id == req.query.ide
                })
                return   data[index]?res.status(200).send(data[index]):res.status(200).send(data[0]);
            }else{
                return   data[0]?res.status(200).send(data[0]):res.status(201).send(error);
            }
                
        }
    }).sort({mIndex:1, sIndex:1,createDate:-1})
   
  }

  exports.create = function(req,res){

   var sh = JSON.parse(req.body.shop)
    shop.find({_id:sh.shopid,'user._id':sh.userid},function(error,shopdata){
if(error){
    //if not valid
    return  res.status(400).json({msg:'new items create in fails. your account is not valid.'});
            
        }
else{
    //if valid
            var image_url = [];
    if(req.files){

         image_url = imagefile.imageuploads(req.files);

    }

    let body=  JSON.parse(req.body.jsonbody);
    let user = JSON.parse(req.body.user);
        var bodydata = new models(body);
        bodydata.images = image_url;
        bodydata.shop = {...JSON.parse(req.body.shop)};
        bodydata.shopid = JSON.parse(req.body.shop).shopid;
        bodydata.user = user;
        bodydata.user.token = null;
        bodydata.createDate = Date.now();
        bodydata.isvalid = true;
        bodydata.isvalidA = true;
        bodydata.sIndex = 100,
        bodydata.mIndex = 10000,
        bodydata.save(function(err,data) {
            if (err){
              
                return  res.status(400).json({msg:'new items create in fails.',status:400});
            }
            else{
                //console.log(data)
            return  res.status(200).json({...data, status:200, token:body.token,msg:'item create in success.'});
            }
            
          });
        }
    })


   
  }


//for favorite
exports.viewforfavorite = function(req,res) {
    var fav = req.query.fav.split(',');
    models.find({'_id': { $in: fav},isvalid:true,isvalidA:true},function(error,data){
        if(error){
            return   res.status(404).json('error');
            
        }else{
            
            var error = {msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested page not found!'};
           // return   data.length>0?res.status(200).send(data):res.status(201).send(error);
            return res.status(200).send(data)
        }
    }).sort({mIndex:1, sIndex:1,createDate:-1})
   
  }

  exports.update = function(req,res){
 
 
     let body=  JSON.parse(req.body.jsonbody);
     var removeimages = {
         files:req.files,
         deleteimages:body.deleteimages,
         images : body.images
     }
     //get file count
     var filecount = 0 
     while(removeimages.files){
         if(removeimages.files.image[filecount]){
             filecount=filecount+1;
         }else{
             filecount =filecount>0?filecount:1;
             break;
         }
     }
     if((filecount+removeimages.images.length-removeimages.deleteimages.length)>3){
       
         return  res.status(201).json({status:201,msg:'your submition fail !, because total file count than three(3). please remove some file.'});
     } 
     //
    var image_url = imagefile.deleteimage(removeimages);
 
     body.images = [...image_url ]
      body.user =  JSON.parse(req.body.user);  
         models.findOneAndUpdate({_id:req.params.id},body, function(error,data){
             if(error){
                 var error = {status:400,msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
                 return  res.status(400).json(error);
             }
             else{
                 return  res.status(200).json({status:200,msg:'update in success.'});
             }
 
         })
 
   }
 
   exports.updateDetails = function(req,res){

    let body=  JSON.parse(req.body.jsonbody);
    models.findOneAndUpdate({_id:req.params.id},body, function(error,data){
        if(error){
            var error = {status:400,msg:'405 Not Found!',errormsg:'Sorry, an error has occured, Requested fail!'};
            return  res.status(400).json(error);
        }
        else{
            return  res.status(200).json({status:200,msg:'update in success.'});
        }

    })

   }
   

   //filter isvalid and isvalidA
   exports.viewallfilter = function(req,res) {

    var request = {isvalid:true,isvalidA:true};
    var towns = [];
    if(req.query.category&&req.query.category.length>2){
        request = {...request,categery:req.query.category};
    }
    if(req.query.subcategory&&req.query.subcategory.length>2){
        request = {...request,subcategery:req.query.subcategory};
    }
    if(req.query.upperprice&&req.query.upperprice.length>0){
        var upperPrice = parseInt(req.query.upperprice);
        request = {...request,itemPrice:{ $lte: upperPrice}  };
    }
    if(req.query.lowerprice&&req.query.lowerprice.length>0){
        var lowerPrice = parseInt(req.query.lowerprice);
        request = {...request,itemPrice:{ $gte: lowerPrice}  };
    }
    if(req.query.district&&req.query.district.length>2){
        request = {...request,'shop.district':req.query.district };
    }
    if(req.query.town&&req.query.town.length>2){
        towns = req.query.town.trim().split(',');
        request = {...request,'shop.town':{ $in: towns} };
    }

   
    models.find(request,function(error,data){
        if(error){
            return   res.status(404).json('error');
            
        }else{
            var dataarray = data;
            var searchname = req.query.search?req.query.search:'';
            var searchnamearray = searchname.trim().split(/\s+|[-]+/).filter(x=>(x!='of'&&x!='at'&&x!='in'&&x!='for'&&x!='by'&&x!='under'&&x!='on'&&x!='top'));

            searchnamearray.forEach(element => {

                dataarray = dataarray.filter(x=>{
                    var regex = new RegExp( '.*'+element+'.*','i' );
                    if(x.urlname.match(regex)!=null){
                        return true
                    }
                })
            });

            if(dataarray.length==0){
                
                var regexpatten = searchnamearray.join('.*|.*');
                dataarray = data.filter(x=>{
                    var regex = new RegExp( '.*'+regexpatten+'.*','i' );
                    if(x.urlname.match(regex)!=null){
                        return true
                    }
                })
                
            }
            
            var error = {msg:'405 Not Found!',errormsg:'Sorry, there are no shops!'};
            return   res.status(200).send(dataarray)
        }
    }).sort({mIndex:1, sIndex:1,createDate:-1})
   
  }