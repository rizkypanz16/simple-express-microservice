const express = require('express');
const env = require('dotenv').config();

const app = express();

app.use(express.json({ extended: true }));

var products = require('././routes/products.js');
var productCategories = require('././routes/productCategories.js');

app.use('/api/products', products);
app.use('/api/product-categories', productCategories);
app.get('/api', (req, res) => {
    res.json(
    {
        "status": true,
        "code": 200,
        "message": "SUCCESS",
        "api": "== products service =="
    });
});
app.get('/', (req, res) => {
    res.json(
    {
        "status": true,
        "code": 200,
        "message": "SUCCESS",
        "api": "== products service =="
    });
});

app.listen(8002, () => {
    console.log("== products service ==");
    console.log(`server listening at http://localhost:8002`);
});