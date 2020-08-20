const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')


app.use('/admin', adminRoutes.adminData);
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).render('404', { pageTilte: 'Page Not Found' });
})

app.listen(5000);


