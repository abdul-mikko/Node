const ProductStruct = require('../model/product');
const cartModel = require('../model/cart')

exports.getIndex = (req, res) => {
    ProductStruct.fetchAll((product => {
        res.render('shop/index', { pageTitle: 'Index', prods: product, path: '/' });
        console.log(product);
    }));
}

exports.getProductList = (req, res) => {
    ProductStruct.fetchAll((product => {
        res.render('shop/products-list', { pageTitle: 'Index', prods: product, path: '/' });

    }));
}
exports.getProductByID = (req, res) => {
    const id = req.params.id;
    ProductStruct.getProductById(id, products => {
        console.log(products)
        res.render('shop/product-detail', {
            product: products,
            pageTitle: products.title, path: '/shop/product-detail'
        })
        console.log(id);
    })

}
exports.getProductDetail = (req, res) => {
    res.render('shop/product-detail', {
        pageTitle: 'Product Detail', path: '/shop/product-detail'
    })
}
exports.getCart = (req, res) => {
    res.render('shop/cart', {
        pageTitle: 'Cart', path: '/cart'
    })
}
exports.postCart = (req, res) => {
    const id = req.body.productId;
    ProductStruct.getProductById(id, product => {
        cartModel.addProduct(id, product.price);
    })
    res.redirect('/cart')
}
exports.getOrder = (req, res) => {
    res.render('shop/order', {
        pageTitle: 'Order', path: '/order'
    })
}
exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout', path: '/checkout'
    })
}