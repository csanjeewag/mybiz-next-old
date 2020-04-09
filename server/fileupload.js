var express = require('express');
var randomstring = require("randomstring");
 
var app = express();
var fileupload = require('express-fileupload');
const fs = require('fs');
const resizeOptimizeImages = require('resize-optimize-images');

app.use(fileupload(
   
))
var exports = module.exports = {};

exports.imageupload = function(req,res) {
    
   
    if(req && req.size<(5*1024*1024)){
     
        filename = req.name;
        encriptcode = randomstring.generate(20);
        req.mv('server/File/Images/'+encriptcode+filename,function(error){
            if(error){
                console.log(error)
                
            }
            else{
              
                (async () => {
                    // Set the options.
                    const options = {
                        images: ['server/File/Images/'+encriptcode+filename],
                        width: 600,
                        quality: 85
                    };
                    
                    // Run the module.
                    await resizeOptimizeImages(options);
                })();
                
            }
         
        })
      

        return encriptcode+filename;;
    }
    else{

        return ''
    }
   
  }

  exports.imageuploads = function(req,res){
      var id = 0;
      image_url = [];
      url = '';
      while(req.image){

        if(req.image[id]){
          url =  this.imageupload(req.image[id])
        }else{
            if(image_url.length==0){image_url[0] = this.imageupload(req.image);};
            break;
        }
        image_url[id] = url;
        
        id = id+1;
      }
      return image_url;
  }

  exports.deleteimage = function(req,res){
  
    var files = req.files;
    var deleteimages = req.deleteimages;
    var id = 0;
    var image_url = [];
   // this.imageuploadbyname({file:req.files.image[0],name:deleteimages[0]});
    console.log(deleteimages,req.files)
    while(true){
        if(req.files!=undefined&&req.files.image[id]&&deleteimages!=undefined&&deleteimages[id]){

            this.imageuploadbyname({file:req.files.image[id],name:deleteimages[id]})
          }
          else if(req.files!=undefined&&req.files.image[id]){
            image_url.push(this.imageupload(req.files.image[id]))
          }
          else if(deleteimages!=undefined&&deleteimages[id]&&id>0){
            console.log(deleteimages[id])
          }
          else{
      
            req.files.image[0]?null:this.imageuploadbyname({file:req.files.image,name:deleteimages[id]});
              break;
          }
          id = id+1;
    }
    
    return image_url;
}

exports.imageuploadbyname = function(req,res) {
    
    var file = req.file;
    var filename = req.name;
    if(file && file.size<(5*1024*1024)){
     
  /*       var filename = name;
        var extention = filename.substr(filename.lastIndexOf('.') + 1);
        if(extention.toLowerCase()=='jpg'||extention.toLowerCase()=='jpeg')
        {*/
        req.file.mv('server/File/Images/'+filename,function(error){
            if(error){
                console.log(error)
                
            }
            else{
              
                (async () => {
                    // Set the options.
                    const options = {
                        images: ['server/File/Images/'+filename],
                        width: 600,
                        quality: 85
                    };
                    
                    // Run the module.
                    await resizeOptimizeImages(options);
                })();
                
            }
         
        })
      
        }
        return filename;
   
  }