const express = require('express');
const next = require('next');
var bodypaser = require('body-parser');
var fileupload = require('express-fileupload');
const { createServer } = require('http')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

//models
var userRepository = require('./repository/user');

//database connection
const mongoose = require('mongoose');
var mongoDB = "mongodb+srv://atoursrilanka:Chanaka1102@cluster0-6wtzm.mongodb.net/atourlankaT?retryWrites=true&w=majority";
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
server.use(fileupload())

app.prepare().then(() => {

  server.get("/api", (req, res) => {

    userRepository.viewall({},res);

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