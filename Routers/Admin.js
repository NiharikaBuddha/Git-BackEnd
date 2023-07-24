const express = require('express');

const router = express.Router();

router.get('/AddProduct',(req,res,next)=>{
    res.send('<form action="/Admin/Addproduct" method="POST"><input type="text" name="title"><button type="submit">Add product</button></input></form>');
});

router.post('/Addproduct',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;