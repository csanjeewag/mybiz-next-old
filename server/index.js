const express = require('express');
const next = require('next');
var bodypaser = require('body-parser');
var fileupload = require('express-fileupload');
const { createServer } = require('http')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

//repository
var userRepository = require('./repository/user');
var shopRepository = require('./repository/shoprepository');

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
server.use(express.static(__dirname + './../File'));
server.use(bodypaser.urlencoded({ extended: true }));
server.use(bodypaser.json());
server.use(fileupload());
server.use(passport.initialize());
server.use(passport.session());


      // Passport session setup.
      passport.serializeUser(function(user, done) {
        done(null, user);
      });
  
      passport.deserializeUser(function(obj, done) {
        done(null, obj);
      });





app.prepare().then(() => {

  server.get("/api/all", (req, res) => {

    userRepository.viewall({},res);

  });  

  server.post("/api/all", (req, res) => {

    return res.status(404).json(JSON.stringify({name:'saneewa'}));

  }); 
  
  server.post("/api/createuser", (req, res) => {

    userRepository.create(req,res);
  });

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

  server.post("/api/signinuser", (req, res) => {
    project.verifyToken(req.body.token).then((jsonData) => {
      userRepository.signinuser(req,res);
  }, (error) => {
      console.error(error.message); // Logs 'Invalid Value'
      return res.status(404).json({msg:'There are some error.'}); 

  });
   
  });


  server.get("/g/:id", (req, res) => {

    project.verifyToken(req.params.id).then((jsonData) => {
      console.log(JSON.stringify(jsonData)); // Does not execute
      return res.status(200).json(JSON.stringify(jsonData)); 
  }, (error) => {
      console.error(error.message); // Logs 'Invalid Value'
      return res.status(200).json(JSON.stringify(error.message)); 

  });

  });

  server.get("/f/:id", (req, res) => {

    passport.use(new FacebookTokenStrategy({
      clientID: '639750616597961',
      clientSecret: '1113abc83cf9479611dee3fde1736fbc'
    }, function(accessToken, refreshToken, profile, done) {
      /*User.findOrCreate({facebookId: profile.id}, function (error, user) {
        return done(error, user);
      });*/
      console.log(profile)
    }
  ));

    passport.authenticate('facebook-token'),
    function (req, res) {
      // do something with req.user
      return res.status(200).json(JSON.stringify(req.params.id)); 
    }
    return res.status(200).json(JSON.stringify('no')); 
  });


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