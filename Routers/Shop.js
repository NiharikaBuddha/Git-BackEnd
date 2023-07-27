const express = require('express');
const ProductsController = require('../Controllers/Products');

const router = express.Router();

router.get('/',ProductsController.getProduct);

module.exports=router;
// 