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

//google
const GoogleSignIn = require('google-sign-in');
const project = new GoogleSignIn.Project('511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com');
//facebook login
const FacebookTokenStrategy = require('passport-facebook-token');
const passport = require('passport');
 
//database connection
const mongoose = require('mongoose');
//var mongoDB = "mongodb+srv://atoursrilanka:Chanaka1102@cluster0-6wtzm.mongodb.net/atourlankaT?retryWrites=true&w=majority";
var mongoDB = "mongodb+srv://csanjeewag:Chanaka*1102@cluster0-pms91.mongodb.net/mybiz?retryWrites=true&w=majority"
mongoose.connect(mongoDB,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (error)=>{
  if(error){
      console.log(error);
  }else{
      console.log('connection ok user')
  }
  })

const server = express();
server.use(express.static(__dirname + '/File'));
server.use(bodypaser.urlencoded({ extended: true }));
server.use(bodypaser.json());
server.use(fileupload());


app.prepare().then(() => {

  /** type api */
  server.get("/api/types", (req, res) => {
 
    typeRepository.viewall({},res);

  });

  server.get("/api/typebyname/:id", (req, res) => {
 
    typeRepository.viewall({type:req.params.id},res);

  });

  server.get("/api/typebyshopid/:id", (req, res) => {
 
    typeRepository.viewbyshopid(req,res);

  });

  server.post("/api/createCatagery", (req, res) => {

    typeRepository.create(req,res)
   /* if(req.body.user!='undefined'){
      project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
        typeRepository.create(req,res)
    }, (error) => {
        console.error(error.message); // Logs 'Invalid Value'
        return res.status(404).json({msg:'you are signout please sign in.'}); 
  
    });
    }
    else{
      return res.status(404).json({msg:'check your account again.'}); 
    }
    */
    
  });

  
  /** */

  /***shop api */

  //get shop details by name

  server.get("/api/shop/:id", (req, res) => {
 
    shopRepository.viewbyname({shopName:req.params.id.replace('-',' ')},res);

  }); 
  server.get("/api/shopid/:id", (req, res) => {
 
    shopRepository.viewbyname({_id:req.params.id},res);

  }); 

  server.get("/api/shopanditems/:id", (req, res) => {
 
    shopRepository.viewshopanditems(req,res);

  }); 
  //create new shop
  server.post("/api/createshop", (req, res) => {

    if(req.body.user!='undefined'){
      project.verifyToken(JSON.parse(req.body.user).token).then((jsonData) => {
        shopRepository.create(req,res)
    }, (error) => {
        console.error(error.message); // Logs 'Invalid Value'
        return res.status(404).json({msg:'you are signout please sign in.'}); 
  
    });
    }
    else{
      return res.status(404).json({msg:'check your account again.'}); 
    }
    
    
  });
/***end shop api */

/** item api */

  //get shop details by name

  server.get("/api/item/:id", (req, res) => {
 
    itemsRepository.viewbyname(req,res);

  }); 

  server.get("/api/itemforfavorite", (req, res) => {
 
    itemsRepository.viewforfavorite(req,res);

  }); 

  server.get("/api/catagerybyname/:id", (req, res) => {
    

    itemsRepository.viewall({categery:req.params.id},res);

  }); 

  server.get("/api/itemsbyshopid/:id", (req, res) => {

    itemsRepository.viewall({'shopid':req.params.id},res);

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
/**end item api */

/** user api  */

server.post("/api/createuser", (req, res) => {

  userRepository.create(req,res);
});

  server.post("/api/signinuser", (req, res) => {
    project.verifyToken(req.body.token).then((jsonData) => {
      userRepository.signinuser(req,res);
  }, (error) => {
      console.error(error.message); // Logs 'Invalid Value'
      return res.status(404).json({msg:'There are some error.'}); 

  });
  });

/***end user api */


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(8000,function(){
  })

/*
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    
    if (pathname === '/a') {
      
       userRepository.create();
      app.render(req, res, '/', query)

    } else if (pathname === '/b') {
     
       userRepository.viewallusers({},res);

      app.render(req, res, '/', query)
    }else if(pathname === '/api/'){
     // userRepository.viewallusers({},res);
      res.status(200).json({ name: 'Next.js' })
    }
     else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })*/
})