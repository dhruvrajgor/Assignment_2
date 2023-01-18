require('dotenv').config();
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');
const app = express();
require('./models');
const homeRouter = require("./routes/homeRouter");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const {check, validationResult } = require("express-validator");


//set views file
app.set('views',path.join(__dirname,'views'));
            
//set view engine
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set('layout','./layouts/layout')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//set cookei & session
app.use(cookieParser('keyboard cat'));
app.use(session({ 
  secret: 'flashblog',
  resave: true,
  saveUninitialized: true
}));


app.use(express.static('public/uploads'))
app.use(express.static(path.join(__dirname,'public')))


// routing
app.use("/", homeRouter)

app.use(cookieParser);


// Server Listening
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});