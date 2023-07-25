const path = require('path');
const http = require('http');

const express = require('express');
const Some_var = express();

const bodyParser = require('body-parser');

const adminRouters = require('./Routers/Admin');
const shopRouters = require('./Routers/Shop');

Some_var.use(bodyParser.urlencoded({extended: false}));

Some_var.use('/Admin', adminRouters);
Some_var.use(shopRouters);

Some_var.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'Views','404.html'));
});


const server = http.createServer(Some_var);  
server.listen(4000);