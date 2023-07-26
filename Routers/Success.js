const express = require('express');

const router = express.Router();
const ProductsController = require('../Controllers/Products');

router.get('/Success',ProductsController.getSuccess);

module.exports=router;