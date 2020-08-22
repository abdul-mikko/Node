const express = require('express');
const router = express.Router();


const shopDataController = require('../controller/shop');
router.get('/', shopDataController.getIndex)
router.get('/products', shopDataController.getProductList)
router.get('/products/:id', shopDataController.getProductByID)
router.get('/product-detail', shopDataController.getProductDetail)
router.get('/cart', shopDataController.getCart)
router.post('/cart', shopDataController.postCart)
router.get('/order', shopDataController.getOrder)
router.get('/checkout', shopDataController.getCheckout)

module.exports = router;