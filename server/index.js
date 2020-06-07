const express = require('express');
const next = require('next');
var bodypaser = require('body-parser');
var fileupload = require('express-fileupload');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

var auth = require('./auth');
//repository
var userRepository = require('./repository/user');
var shopRepository = require('./repository/shoprepository');
var itemsRepository = require('./repository/itemrepository');
var typeRepository = require('./repository/typerepository');
var questionRepository = require('./repository/questionrepository');
var reviewrepository = require('./repository/reviewrepository');
var locationrepository = require('./repository/locationrepository');
var orderRepository = require('./repository/orderRepository');
var notificationRepository = require('./repository/notificationRepository');
var fileuploadrepo = require('./fileupload');

//google
const GoogleSignIn = require('google-sign-in');
const project = new GoogleSignIn.Project('511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com');
 
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

server.get("/files/resizeall",(req,res)=>{
  fileuploadrepo.resizeOptimizeImagesallimages(req,res);
})

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

  
    if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
      reviewrepository.create(req,res);
    }
    else{
      return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
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

  
    if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
      questionRepository.create(req,res);
    }
    else{
      return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
    }
    
    
  });

  server.post("/api/answertoqestion/:id", (req, res) => {

  
    if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
      questionRepository.answertoqestion(req,res);
    }
    else{
      return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
    }
    
    
  });

  /************** */

  /**************************************************************** type api **********************************************/
  server.get("/api/types", (req, res) => {
 
    typeRepository.viewall({index: {$gt:0}},res);

  });
  server.get("/api/admintypes", (req, res) => {
 
    typeRepository.viewall({},res);

  });

  server.get("/api/typebyname/:id", (req, res) => {
 
    typeRepository.viewall({type:req.params.id,index: {$gt:0}},res);

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

   
    if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
      typeRepository.create(req,res);
    }
    else{
      return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
    }
  
    
  });

  server.put("/api/updateCatagery/:id", (req, res) => {

   
    if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
      typeRepository.update(req,res);
    }
    else{
      return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
    }
  
    
  });
  
      //get type by id
  server.get("/api/updateCategory", (req, res) => {
 
    typeRepository.updateCategery(req,res);
    
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

    if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
      shopRepository.create(req,res);
    }
    else{
      return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
    }
    
    
  });

    //admin create new shop
    server.post("/api/admincreateshop", (req, res) => {

      if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
        shopRepository.admincreate(req,res);
      }
      else{
        return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
      }
      
      
    });

    //update shop
    server.put("/api/updateshop/:id", (req, res) => {

      if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
        shopRepository.update(req,res);
      }
      else{
        return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
      }
      
      
    });

      //update details only
      server.put("/api/updateshopDetails/:id", (req, res) => {

        if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
          shopRepository.updateDetails(req,res);

        }
        else{
          return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
        }
        
        
      });
  
  //adminupdate shop
  server.put("/api/adminupdateshop/:id", (req, res) => {

    if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
      shopRepository.adminupdate(req,res);
    }
    else{
      return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
    }
    
    
  });

    //admin update details only
    server.put("/api/adminupdateshopDetails/:id", (req, res) => {

      if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
        shopRepository.adminupdateDetails(req,res);
      }
      else{
        return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
      }
      
      
    });


      
/***end shop api */

/*************************************************************************** item api ************************************/

//agreagate testing
server.get("/api/allitems", (req, res) => {

  itemsRepository.viewallAgregate(req,res);

});

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

    if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
      itemsRepository.create(req,res);
    }
    else{
      return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
    }
    
    
  });
  //admin create item
  server.post("/api/admincreateitem", (req, res) => {

    if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
      itemsRepository.admincreate(req,res);
    }
    else{
      return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
    }
    
    
  });
      //update item
      server.put("/api/updateitem/:id", (req, res) => {

        if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
          itemsRepository.update(req,res);
        }
        else{
          return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
        }
        
        
      });

  //update details only
      server.put("/api/updateitemDetails/:id", (req, res) => {

        if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
          itemsRepository.updateDetails(req,res);
        }
        else{
          return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
        }
        
        
      });

        //adminupdate item
        server.put("/api/adminupdateitem/:id", (req, res) => {

          if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
            itemsRepository.adminupdate(req,res);
          }
          else{
            return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
          }
          
          
        });
  
    //adminupdate details only
        server.put("/api/adminupdateitemDetails/:id", (req, res) => {
  
          if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
            itemsRepository.adminupdateDetails(req,res);
          }
          else{
            return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
          }
          
          
        });
  

/**end item api */


/*****************************************************************************order ******************************** */

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

    if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
      orderRepository.create(req,res);
    }
    else{
      return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
    }
    
    
  });

  server.put("/api/updateorder/:id", (req, res) => {

    if(req.body.user!='undefined'&&auth.isvaliduser(req.body.user)){
      orderRepository.update(req,res);
    }
    else{
      return res.status(404).json({msg:'your account is not valid, check and try again. thank you.',status:201}); 
    }
    
    
  });
/********************************************************* */

/******************************************************* user api  ***************************************************/

server.get("/api/users", (req, res) => {

  userRepository.viewall({},res);

}); 
server.get("/api/usersadmin", (req, res) => {

  userRepository.viewallshopanditems({},res);

}); 
//create new user
server.post("/api/createuser", (req, res) => {

 //var token = auth.createtoken(req,res)
  userRepository.create(req,res);
});

  server.post("/api/signinuser", (req, res) => {
    userRepository.signinuser(req,res);
  });

/**************************************************************************************************************************** */
/**************************************************notification */
server.get("/api/notifications/:id", (req, res) => {

  notificationRepository.viewall({senderId:req.params.id},res);

}); 
//create new notification
server.post("/api/createnotification", (req, res) => {

 //var token = auth.createtoken(req,res)
 notificationRepository.create(req,res);
});
//update notification
server.put("/api/updatenotification", (req, res) => {

  //var token = auth.createtoken(req,res)
  notificationRepository.update(req,res);
 });
 //delete notification
server.get("/api/deletenotification/:id", (req, res) => {

  //var token = auth.createtoken(req,res)
  notificationRepository.delete(req,res);
 });
/************************************************************* */

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(8000,function(){
  })


})
