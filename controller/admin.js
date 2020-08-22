const ProductStruct = require('../model/product');

exports.getProduct = (req, res) => {
    res.render('admin/edit-product', { pageTitle: 'Edit Product', path: '/admin/edit-product' });
}

exports.postProduct = (req, res) => {
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const firstProd = new ProductStruct(title, imageUrl, price, description)
    firstProd.save();
    res.redirect('/');
}


exports.getEditProduct = (req, res) => {
    const query = req.query.edit;
    res.render('admin/edit-product', {
        pageTitle: 'Edit Product', path: '/admin/edit-product', editing: query
    });
}
exports.getProducts = (req, res) => {
    ProductStruct.fetchAll((product => {
        res.render('admin/products', { pageTitle: 'Admin Products', prods: product, path: '/' });
        console.log(product);
    }));
}