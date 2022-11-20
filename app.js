const express = require("express");
const path=require("path");
const hbs = require("hbs")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")                                                                                                          
var bodyParser = require('body-parser');


var mongo = require('mongodb');
var db = mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');
const  app = express();
require("./db/conn")
const routerr = require('./routes/routes')
const port = 3000;
const staticPath = path.join(__dirname,"../public"); 

//defining views and partials
const tempPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

app.use(routerr)
// console.log(staticPath);
// console.log(tempPath);
// console.log(partialsPath);

//Serving static files using express

//setting view engine and directory
app.set("view engine", "hbs");
app.set("views", tempPath);

//setting partials directory
hbs.registerPartials(partialsPath)

app.use(express.static("public")) 

app.use(bodyparser.urlencoded({ extended:false }))
app.use(bodyparser.json());
 
app.get("/",(req,res)=>{
    res.render("register");
});


app.listen(3000,(req,res)=>{
    console.log("server is running at port");
});