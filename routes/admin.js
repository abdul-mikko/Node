const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin')


router.get('/add-product', adminController.getProduct)

router.get('/admin-products', adminController.getProducts)

router.post('/add-product', adminController.postProduct)

router.get('/edit-product/:id', adminController.getEditProduct)

module.exports = router;
