const express = require('express')
const path = require('path')
const socket = require('socket.io')
const axios = require('axios')
const bodyParser = require('body-parser')
const routes=require('./server/routes')
const mongoose = require('mongoose')


const app = express()

const port = process.env.PORT||3000
const server = app.listen(port, ()=>{
    console.log('listening on port ' + port)
})

mongoose.connect('mongodb://localhost:27017/stocks')
const io = socket(server)

app.use(express.static(path.join(__dirname, 'client/public')))

app.use(function(req, res, next){
    res.io = io;
    next();
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(routes)

app.route('*').get((req,res)=>{
    res.sendFile(path.join(__dirname, 'client/public/index.html'))
})





