const path = require('path');
const http = require('http');

const express = require('express');
const Some_var = express(); 
const ErrorController = require('./Controllers/Error');

const bodyParser = require('body-parser');

const adminRouters = require('./Routers/Admin');
const shopRouters = require('./Routers/Shop');
const  ContactRouters = require('./Routers/ContactUs');
const  SuccessRouters = require('./Routers/Success');

Some_var.use(bodyParser.urlencoded({extended: false}));
Some_var.use(express.static(path.join(__dirname,'public')))

Some_var.use('/Admin', adminRouters);
Some_var.use(shopRouters);
Some_var.use(ContactRouters);
Some_var.use(SuccessRouters);

Some_var.use(ErrorController.ErrorPage);


const server = http.createServer(Some_var);  
server.listen(4000);