const express = require('express');
const path = require('path');


const router = express.Router();
const productData = require('./admin');


router.get('/', (req, res) => {
    console.log(productData.product)
    res.render('shop', { pageTilte: 'Shop Product', prods: productData.product });
})

module.exports = router;