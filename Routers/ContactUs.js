const express = require('express');

const router = express.Router();

const ProductsController = require('../Controllers/Products');

router.get('/ContactUs',ProductsController.getContact);

router.post('/ContactUs',ProductsController.postContact);

module.exports=router;