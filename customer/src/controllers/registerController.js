const config = require("../../config/connection");
var connection = config.connection;
var bodyParser = require("body-parser");

exports.postRegister = (req, res) => {
  var query =
    "INSERT INTO customer (customer_name, customer_email, customer_phone, customer_address) VALUES ('" +
    req.body.customerName +
    "', '" +
    req.body.customerEmail +
    "', '" +
    req.body.customerPhone +
    "', '" +
    req.body.customerAddress +
    "')";
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.status(200);
    res.json({
      status: "SUCCESS",
      data: [],
    });
  });
};
