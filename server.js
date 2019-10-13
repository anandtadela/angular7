const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
const port = process.env.PORT || 3001;
app.use(express.static(__dirname + '/dist'));
app.get("/*",(req,res)=>{
  res.sendFile(path.join(__dirname));
});
app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});
app.post("/login",(req,res)=>{
  var token = jwt.sign({userID: req.body.username}, 'app-super-shared-secret', {expiresIn: '30s'});
  res.send({token,uname:req.body.username});
  //res.send(req.body);
});
const server = http.createServer(app);
server.listen(port,()=>{
  console.log('Running....');
});
