const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(5000);

