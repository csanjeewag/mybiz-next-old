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
    var images = req.images;

    var image_url = [...images];
    var newimageurl = [];
    if(req.files)
    {newimageurl = this.imageuploads(req.files);}
   

    deleteimages.forEach(element => {
            try{fs.unlinkSync('server/File/Images/'+element);}
            catch(err){console.log('error delete')}
            image_url.splice(image_url.findIndex(e=>e==element),1);
    });

    image_url = [...image_url,...newimageurl]


    if(deleteimages&&deleteimages.includes(images[0])){
        console.log(image_url[0],images[0])
        try{fs.renameSync('server/File/Images/'+image_url[0], 'server/File/Images/ba.jpg');}
        catch(err){console.log('err')}
        image_url[0] = images[0];
    }

 
var deletearray = image_url.slice(3,image_url.length);
var imageurl = image_url.slice(0,3);
image_url = imageurl;

deletearray.forEach(element => {
   /* fs.unlink('server/File/Images/'+element, (err) => {
        if (err) {
          console.error('err')
          return
        }
      })*/
      try{
        fs.unlinkSync('server/File/Images/'+element)
      }catch(e){

      }
     
});
    
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