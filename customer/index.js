const express = require('express');

const app = express();

app.use(express.json());

var register = require('././routes/register.js');
var customer = require('././routes/customer.js');
var wishlist = require('././routes/wishlist.js');

app.use('/api/customer/wishlist', wishlist);
app.use('/api/customer/register', register);
app.use('/api/customer', customer);

app.listen(8001, () => {
    console.log('customer service listening on port 8001');
});