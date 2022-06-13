"use strict";

var express = require('express');
var app = express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());

var userController=require('./controllers/userController');
var recipyController=require('./controllers/recipyContoller');

app.use("/user",userController);
app.use("/recipy",recipyController);
app.listen(2990, () => {
    console.log('listen...')
})

const logger=(req,res,next)=>{
    next();
}
app.use(logger);



