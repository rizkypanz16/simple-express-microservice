const config = require('./../database/connection.js');
var connection = config.connection;
var bodyParser = require('body-parser');

exports.getProducts = (req, res) => {
    connection.query("SELECT products.product_id AS productId, products.product_name AS productName, products.product_description AS productDescription, products.product_quantity AS productQuantity, products.product_price AS productPrice, products.product_image AS productImage, products.product_category AS productCategoryId, product_categories.product_category_name AS productCategoryName, products.product_created_at AS productCreatedAt, products.product_updated_at AS productUpdatedAt FROM products INNER JOIN product_categories ON products.product_category = product_categories.product_category_id;", (error, results, fields) => { 
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
    connection.query("SELECT products.product_id AS productId, products.product_name AS productName, products.product_description AS productDescription, products.product_quantity AS productQuantity, products.product_price AS productPrice, products.product_image AS productImage, products.product_category AS productCategoryId, product_categories.product_category_name AS productCategoryName, products.product_created_at AS productCreatedAt, products.product_updated_at AS productUpdatedAt FROM products INNER JOIN product_categories ON products.product_category = product_categories.product_category_id WHERE products.product_id = "+req.params.productId+"", (error, results, fields) => { 
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

exports.postProducts = (req, res) => {
  var query = "INSERT INTO products (product_name, product_description, product_quantity, product_price, product_image, product_category) VALUES ('"+req.body.productName+"', '"+req.body.productDescription+"', "+req.body.productQuantity+", "+req.body.productPrice+", '"+req.body.productImage+"', "+req.body.productCategoryId+")";
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

exports.putProducts = (req, res) => {
  var query = "UPDATE products SET product_name='"+req.body.productName+"', product_description='"+req.body.productDescription+"', product_quantity='"+req.body.productQuantity+"', product_price="+req.body.productPrice+", product_image='"+req.body.productImage+"', product_category="+req.body.productCategoryId+" WHERE product_id="+req.params.productId+"";
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