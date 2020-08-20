const express = require('express');
const path = require('path')

const router = express.Router();

const products = [];

router.get('/add-product', (req, res) => {
    res.render('add-product', { pageTilte: 'Add Product' });
})


router.post('/add-product', (req, res) => {
    products.push({ title: req.body.title });
    console.log(products)
    res.redirect('/');

})

exports.adminData = router;
exports.product = products;