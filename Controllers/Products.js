const Product = require('../Models/Product');

const path = require('path');
const rootDir = require('../util/path');

exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','AddProduct.html'));
}

exports.postAddProduct=(req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProduct=(req,res,next)=>{
    const products = Product.fetchAll();
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

// 

