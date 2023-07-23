const http = require('http');

const express = require('express');

const Some_var = express();

Some_var.use((req,res,next)=>{
    console.log('In the middleware');
    next();     //Allows the request to continue to the next middleware in line
});

Some_var.use((req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello from express</h1>');
});

const server2 = http.createServer(Some_var);

const CleanUp = require('./CleanUp');

const server = http.createServer(Some_var,CleanUp);

server.listen(3000);  
server2.listen(4000);