const path = require('path');

const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/ContactUs',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','ContactUs.html'));
});

router.post('/ContactUs',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/Success');
});

module.exports=router;