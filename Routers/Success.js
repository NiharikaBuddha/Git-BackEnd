const path = require('path');

const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/Success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','Success.html'));
});;

module.exports=router;