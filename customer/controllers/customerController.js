const config = require('./../database/connection.js');
var connection = config.connection;

exports.getCustomer = (req, res) => {
    connection.query("SELECT customer_id AS customerId, customer_name AS customerName, customer_email AS customerEmail, customer_phone AS customerPhone, customer_address as customerAddress FROM customer", (error, results, fields) => { 
        if (error) throw error;
        res.status(200);
        res.json(
          { 
              status: "OK",
              data: results
          }
        )
      });
}

exports.getCustomerId = (req, res) => {
    connection.query("SELECT customer_id AS customerId, customer_name AS customerName, customer_email AS customerEmail, customer_phone AS customerPhone, customer_address as customerAddress FROM customer WHERE customer_id = '"+req.params.customerId+"'", (error, results, fields) => { 
        if (error) throw error;
        res.status(200);
        res.json(
          { 
              status: "OK",
              data: results
          }
        )
      });
}

exports.putCustomer = (req, res) => {
  var query = "UPDATE customer SET customer_name='"+req.body.customerName+"', customer_email='"+req.body.customerEmail+"', customer_phone='"+req.body.customerPhone+"', customer_address='"+req.body.customerAddress+"' WHERE customer_id='"+req.params.customerId+"'";
  connection.query(query, (error, results) => { 
    if (error) throw error;
    res.status(200);
    res.json(
      { 
        status: "SUCCESS",
        data: []
      }
    )
  }); 
}

exports.deleteCustomer = (req, res) => {
  var query = "DELETE FROM customer WHERE customer_id='"+req.params.customerId+"'";
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.status(200);
    res.json(
      { 
          status: "SUCCESS",
          data: []
      }
    )
  });
}