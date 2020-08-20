const express = require('express');
const path = require('path')

const router = express.Router();


router.get('/add-product', (req, res) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add</button> </form>');
})


router.post('/add-product', (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname, '../', 'views', 'admin.html'))
})

module.exports = router;