const config = require('./../database/connection.js');
var connection = config.connection;
var bodyParser = require('body-parser');

exports.getProductCategories = (req, res) => {
    connection.query("SELECT product_category_id AS productCategoryId, product_category_name AS productCategoryName, product_category_description AS productCategoryDescription, product_category_created_at AS productCategoryCreatedAt, product_category_updated_at AS productCategoryUpdatedAt FROM product_categories", (error, results, fields) => { 
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

exports.getProductCategoriesId = (req, res) => {
    connection.query("SELECT product_category_id AS productCategoryId, product_category_name AS productCategoryName, product_category_description AS productCategoryDescription, product_category_created_at AS productCategoryCreatedAt, product_category_updated_at AS productCategoryUpdatedAt FROM product_categories WHERE product_category_id = '"+req.params.productCategoryId+"'", (error, results, fields) => { 
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

exports.postProductCategories = (req, res) => {
  var query = "INSERT INTO product_categories (product_category_name, product_category_description) VALUES ('"+req.body.productCategoryName+"', '"+req.body.productCategoryDescription+"' )";
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

exports.putProductCategories = (req, res) => {
  var query = "UPDATE product_categories SET product_category_name='"+req.body.productCategoryName+"', product_category_description='"+req.body.productCategoryDescription+"' WHERE product_category_id="+req.params.productCategoryId+"";
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

exports.deleteProductCategories = (req, res) => {
  var query = "DELETE FROM product_categories WHERE product_category_id='"+req.params.productCategoryId+"'";
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