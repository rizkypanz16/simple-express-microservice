const express = require('express');
const env = require('dotenv').config();

const app = express();

app.use(express.json({ extended: true }));

var register = require('././routes/register.js');
var customer = require('././routes/customer.js');
var wishlist = require('././routes/wishlist.js');

app.use('/api/customer/wishlist', wishlist);
app.use('/api/customer/register', register);
app.use('/api/customer', customer);
app.get('/api', (req, res) => {
    res.json(
    {
        "status": true,
        "code": 200,
        "message": "SUCCESS",
        "api": "== customer service =="
    });
});
app.get('/', (req, res) => {
    res.json(
    {
        "status": true,
        "code": 200,
        "message": "SUCCESS",
        "api": "== customer service =="
    });
});

app.listen(8001, () => {
    console.log("== customer service ==");
    console.log(`server listening at http://localhost:8001`);
});