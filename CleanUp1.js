const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const Some_var = express();

// Some_var.use((req,res,next)=>{
//     console.log('In the middleware');
//     next();     //Allows the request to continue to the next middleware in line
// });

Some_var.use(bodyParser.urlencoded({extended: false}));

Some_var.use('/',(req,res,next)=>{
    console.log('This always runs');
    next();
});

Some_var.use('/AddProduct',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></input></form>');
});

Some_var.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

Some_var.use('/',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello from express</h1>');
});

const server = http.createServer(Some_var);

// const CleanUp = require('./CleanUp');

// const server = http.createServer(CleanUp);

// server.listen(3000);  
server.listen(4000);