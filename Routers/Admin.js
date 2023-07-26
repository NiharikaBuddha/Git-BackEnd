const express = require('express');
const ProductsController = require('../Controllers/Products');

const router = express.Router();

router.get('/AddProduct',ProductsController.getAddProduct);

router.post('/Addproduct',ProductsController.postAddProduct);

module.exports=router;