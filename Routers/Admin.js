const path = require('path');

const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/AddProduct',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','AddProduct.html'));
});

router.post('/Addproduct',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;