const express = require('express');
const next = require('next');
var bodypaser = require('body-parser');
var fileupload = require('express-fileupload');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

//repository
var userRepository = require('./repository/user');
var shopRepository = require('./repository/shoprepository');
var itemsRepository = require('./repository/itemrepository');
var typeRepository = require('./repository/typerepository');
var questionRepository = require('./repository/questionrepository');
var reviewrepository = require('./repository/reviewrepository');
var locationrepository = require('./repository/locationrepository');
var orderRepository = require('./repository/orderRepository');

//google
const GoogleSignIn = require('google-sign-in');
const project = new GoogleSignIn.Project('511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com');
//facebook login
const FacebookTokenStrategy = require('passport-facebook-token');
const passport = require('passport');
 
//database connection
const mongoose = require('mongoose');
//var mongoDB = "mongodb+srv://atoursrilanka:Chanaka1102@cluster0-6wtzm.mongodb.net/atourlankaT?retryWrites=true&w=majority";
var mongoDB = "mongodb+srv://csanjeewag:Chanaka*1102@cluster0-pms91.mongodb.net/onshop?retryWrites=true&w=majority"
mongoose.connect(mongoDB,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (error)=>{
  if(error){
      console.log(error);
  }else{
      console.log('connection ok user')
  }
  })
  mongoose.set('useFindAndModify', false);
  
const server = express();
server.use(express.static(__dirname + '/File'));
server.use(bodypaser.urlencoded({ extended: true }));
server.use(bodypaser.json());
server.use(fileupload());


app.prepare().then(() => {

/******************************************************* location************************************* */
server.get("/api/locations", (req, res) => {
 
  locationrepository.viewall({},res);

});
server.get("/api/location/id", (req, res) => {
 
  locationrepository.viewall({district:req.params.id},res);

});
  /***********************************************************reviews*************************** */
  server.get("/api/reviews/:id", (req, res) => {
 
    reviewrepository.viewall({itemid:req.params.id},res);

  });

  server.post("/api/reviewcreate", (req, res) => {

  
    if(req.body.user!='undefined'){
      project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
        reviewrepository.create(req,res)
    }, (error) => {
  
        return res.status(404).json({msg:'you are signout please sign in.'}); 
  
    });
    }
    else{
      return res.status(404).json({msg:'check your account again.'}); 
    }
    
    
  });


  /********* */

  /****************************************************************question */
  server.get("/api/questions/:id", (req, res) => {
 
    questionRepository.viewall({itemid:req.params.id},res);

  });

  server.put("/api/removeansewer/:id", (req, res) => {
 
    questionRepository.removeansewer(req,res);

  });

  server.post("/api/questioncreate", (req, res) => {

  
    if(req.body.user!='undefined'){
      project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
          questionRepository.create(req,res)
    }, (error) => {
  
        return res.status(404).json({msg:'you are signout please sign in.'}); 
  
    });
    }
    else{
      return res.status(404).json({msg:'check your account again.'}); 
    }
    
    
  });

  server.post("/api/answertoqestion/:id", (req, res) => {

  
    if(req.body.user!='undefined'){
      project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
          questionRepository.answertoqestion(req,res);
    }, (error) => {

        return res.status(404).json({msg:'you are signout please sign in.'}); 
  
    });
    }
    else{
      return res.status(404).json({msg:'check your account again.'}); 
    }
    
    
  });

  /************** */

  /**************************************************************** type api **********************************************/
  server.get("/api/types", (req, res) => {
 
    typeRepository.viewall({},res);

  });

  server.get("/api/typebyname/:id", (req, res) => {
 
    typeRepository.viewall({type:req.params.id},res);

  });
  //get type by id
  server.get("/api/typebyid/:id", (req, res) => {
 
    typeRepository.viewall({_id:req.params.id},res);

  });
  //get sub catagories by item id
  server.get("/api/typebyshopid/:id", (req, res) => {
 
    typeRepository.viewbyshopid(req,res);

  });

  server.post("/api/createCatagery", (req, res) => {

   
    if(req.body.user!='undefined'){
      project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
         typeRepository.create(req,res)
    }, (error) => {
     
        return res.status(404).json({msg:'you are signout please sign in.'}); 
  
    });
    }
    else{
      return res.status(404).json({msg:'check your account again.'}); 
    }
  
    
  });

  server.put("/api/updateCatagery/:id", (req, res) => {

   
    if(req.body.user!='undefined'){
      project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
         typeRepository.update(req,res)
    }, (error) => {
     
        return res.status(404).json({msg:'you are signout please sign in.'}); 
  
    });
    }
    else{
      return res.status(404).json({msg:'check your account again.'}); 
    }
  
    
  });
  
  /** */

  /**********************************************************************************shop api ***************************/

  //get shop details by name isvalid isvalidA

  server.get("/api/allshop/:id", (req, res) => {
 
    if(req.params.id=='All-island'){
      shopRepository.viewall({isvalid:true,isvalidA:true},res); 
    }else{
      shopRepository.viewall({district:req.params.id,isvalid:true,isvalidA:true},res);
    }
    

  }); 

  //admin get all types shop
  server.get("/api/adminallshop/:id", (req, res) => {
 
    if(req.params.id=='All-island'){
      shopRepository.viewall({},res); 
    }else{
      shopRepository.viewall({district:req.params.id},res);
    }
    

  }); 
  // get shop in url name
  server.get("/api/shop/:id", (req, res) => {
 
    shopRepository.viewbyname({urlname:req.params.id,isvalid:true,isvalidA:true},res);

  }); 
//shop by id
  server.get("/api/shopid/:id", (req, res) => {
 
    shopRepository.viewbyname({_id:req.params.id,isvalid:true,isvalidA:true},res);

  }); 

  //shop and items by shop id isvaild isvalidA
  server.get("/api/shopanditems/:id", (req, res) => {
 
    shopRepository.viewshopanditems(req,res);

  }); 

   //admin shop and items by user id -- user all items
   server.get("/api/viewshopanditemsuserid/:id", (req, res) => {
 
    shopRepository.viewshopanditemsuserid(req,res);

  }); 

//isvalid isvalidA
  server.get("/api/viewbyusername/:id", (req, res) => {
 
    shopRepository.viewbyusername(req,res);

  }); 

  //admin all shop by user names
  server.get("/api/adminviewbyusername/:id", (req, res) => {
 
    shopRepository.adminviewbyusername(req,res);

  }); 

  //create new shop
  server.post("/api/createshop", (req, res) => {

    if(req.body.user!='undefined'){
      project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
        shopRepository.create(req,res)
    }, (error) => {

        return res.status(404).json({msg:'you are signout please sign in.'}); 
  
    });
    }
    else{
      return res.status(404).json({msg:'check your account again.'}); 
    }
    
    
  });

    //update shop
    server.put("/api/updateshop/:id", (req, res) => {

      if(req.body.user!='undefined'){
        project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
          shopRepository.update(req,res)
      }, (error) => {
  
          return res.status(404).json({msg:'you are signout please sign in.'}); 
    
      });
      }
      else{
        return res.status(404).json({msg:'check your account again.'}); 
      }
      
      
    });

      //update details only
      server.put("/api/updateshopDetails/:id", (req, res) => {

        if(req.body.user!='undefined'){
          project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
            shopRepository.updateDetails(req,res)
        }, (error) => {
    
            return res.status(404).json({msg:'you are signout please sign in.'}); 
      
        });
        }
        else{
          return res.status(404).json({msg:'check your account again.'}); 
        }
        
        
      });
  
  //adminupdate shop
  server.put("/api/adminupdateshop/:id", (req, res) => {

    if(req.body.user!='undefined'){
      project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
        shopRepository.adminupdate(req,res)
    }, (error) => {

        return res.status(404).json({msg:'you are signout please sign in.'}); 
  
    });
    }
    else{
      return res.status(404).json({msg:'check your account again.'}); 
    }
    
    
  });

    //admin update details only
    server.put("/api/adminupdateshopDetails/:id", (req, res) => {

      if(req.body.user!='undefined'){
        project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
          shopRepository.adminupdateDetails(req,res)
      }, (error) => {
  
          return res.status(404).json({msg:'you are signout please sign in.'}); 
    
      });
      }
      else{
        return res.status(404).json({msg:'check your account again.'}); 
      }
      
      
    });


      
/***end shop api */

/*************************************************************************** item api ************************************/

server.get("/api/itembyid/:id", (req, res) => {

  itemsRepository.viewall({'_id':req.params.id,isvalid:true,isvalidA:true},res);

});

  //get item details by url name isvalid isvalidA

  server.get("/api/item/:id", (req, res) => {
 
    itemsRepository.viewbyname(req,res);

  }); 
//favorite items in cookies isvalid isvalidA
  server.get("/api/itemforfavorite", (req, res) => {
 
    itemsRepository.viewforfavorite(req,res);

  }); 

//items in category isvalid isvalidA
  server.get("/api/catagerybyname/:id", (req, res) => {
    

    itemsRepository.viewall({categery:req.params.id,isvalid:true,isvalidA:true},res);

  }); 
//items in category isvalid isvalidA
  server.get("/api/itemsbyshopid/:id", (req, res) => {

    itemsRepository.viewall({'shopid':req.params.id,isvalid:true,isvalidA:true},res);

  }); 

  //filter items isvalid isvalidA
  server.get("/api/itemfilter", (req, res) => {

    itemsRepository.viewallfilter(req,res);

  }); 

  server.post("/api/createitem", (req, res) => {

    if(req.body.user!='undefined'){
      project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
        itemsRepository.create(req,res)
    }, (error) => {
        return res.status(404).json({msg:'you are signout please sign in.'}); 
  
    });
    }
    else{
      return res.status(404).json({msg:'check your account again.'}); 
    }
    
    
  });

      //update item
      server.put("/api/updateitem/:id", (req, res) => {

        if(req.body.user!='undefined'){
          project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
            itemsRepository.update(req,res)
        }, (error) => {
    
            return res.status(404).json({msg:'you are signout please sign in.'}); 
      
        });
        }
        else{
          return res.status(404).json({msg:'check your account again.'}); 
        }
        
        
      });

  //update details only
      server.put("/api/updateitemDetails/:id", (req, res) => {

        if(req.body.user!='undefined'){
          project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
            itemsRepository.updateDetails(req,res)
        }, (error) => {
    
            return res.status(404).json({msg:'you are signout please sign in.'}); 
      
        });
        }
        else{
          return res.status(404).json({msg:'check your account again.'}); 
        }
        
        
      });

        //adminupdate item
        server.put("/api/adminupdateitem/:id", (req, res) => {

          if(req.body.user!='undefined'){
            project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
              itemsRepository.adminupdate(req,res)
          }, (error) => {
      
              return res.status(404).json({msg:'you are signout please sign in.'}); 
        
          });
          }
          else{
            return res.status(404).json({msg:'check your account again.'}); 
          }
          
          
        });
  
    //adminupdate details only
        server.put("/api/adminupdateitemDetails/:id", (req, res) => {
  
          if(req.body.user!='undefined'){
            project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
              itemsRepository.adminupdateDetails(req,res)
          }, (error) => {
      
              return res.status(404).json({msg:'you are signout please sign in.'}); 
        
          });
          }
          else{
            return res.status(404).json({msg:'check your account again.'}); 
          }
          
          
        });
  

/**end item api */

/******************************************************* user api  ***************************************************/
//create new user
server.post("/api/createuser", (req, res) => {

  userRepository.create(req,res);
});

  server.post("/api/signinuser", (req, res) => {
    project.verifyToken(req.body.token).then((jsonData) => {
      userRepository.signinuser(req,res);
  }, (error) => {
  
      return res.status(404).json({msg:'There are some error.'}); 

  });
  });

/**************************************************************************************************************************** */


/********************order ******************************** */

server.get("/api/orderbyshopid/:id", (req, res) => {

  orderRepository.viewallbystate(req,res);

}); 

//admin orders by shop id
server.get("/api/adminorderbyshopid/:id", (req, res) => {

  orderRepository.adminviewallbystate(req,res);

}); 

server.get("/api/orderbyuserid/:id", (req, res) => {

  orderRepository.viewallbyuserid(req,res);

}); 

  //create new order
  server.post("/api/createorder", (req, res) => {

    if(req.body.user!='undefined'){
      project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
        orderRepository.create(req,res)
    }, (error) => {

        return res.status(404).json({msg:'you are signout please sign in.'}); 
  
    });
    }
    else{
      return res.status(404).json({msg:'check your account again.'}); 
    }
    
    
  });

  server.put("/api/updateorder/:id", (req, res) => {

    if(req.body.user!='undefined'){
      project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
        orderRepository.update(req,res)
    }, (error) => {

        return res.status(404).json({msg:'you are signout please sign in.'}); 
  
    });
    }
    else{
      return res.status(404).json({msg:'check your account again.'}); 
    }
    
    
  });
/********************************************************* */

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(8000,function(){
  })


})