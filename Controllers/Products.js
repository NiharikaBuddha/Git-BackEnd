const product = require('../Models/Product');

const path = require('path');
const rootDir = require('../util/path');

exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','AddProduct.html'));
}

exports.postAddProduct=(req,res,next)=>{
    const product1 = new product(req.body.title);
    product1.save();
    res.redirect('/');
}

exports.getProduct=(req,res,next)=>{
    const product2 = product.fetchAll();
    res.sendFile(path.join(rootDir,'Views','Shop.html'));
}

exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','ContactUs.html'));
}

exports.postContact=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/Success');
}

exports.getSuccess=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','Success.html'));
}
