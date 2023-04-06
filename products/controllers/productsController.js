const config = require('./../database/connection.js');
var connection = config.connection;
var bodyParser = require('body-parser');

exports.getProducts = (req, res) => {
    connection.query("SELECT product_id AS productId, product_name AS productName, product_description AS productDescription, product_price AS productPrice, product_image AS productImage, product_category AS productCategory, product_created_at AS productCreatedAt, product_updated_at AS productUpdatedAt FROM products", (error, results, fields) => { 
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

exports.getProductsId = (req, res) => {
    connection.query("SELECT product_id AS productId, product_name AS productName, product_description AS productDescription, product_price AS productPrice, product_image AS productImage, product_category AS productCategory, product_created_at AS productCreatedAt, product_updated_at AS productUpdatedAt FROM products WHERE product_id = '"+req.params.productId+"'", (error, results, fields) => { 
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

exports.putProducts = (req, res) => {
  var query = "UPDATE products SET product_name='"+req.body.productName+"', product_description='"+req.body.productDescription+"', product_price="+req.body.productPrice+", product_image='"+req.body.productImage+"', product_category="+req.body.productCategory+" WHERE product_id="+req.params.productId+"";
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

exports.deleteProducts = (req, res) => {
  var query = "DELETE FROM products WHERE product_id='"+req.params.productId+"'";
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