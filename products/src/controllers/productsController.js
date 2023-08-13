require("body-parser");
const connection = require("../../config/connection");

exports.getProducts = (req, res) => {
  try {
    let query =
      "SELECT products.product_id AS productId, products.product_name AS productName, products.product_description AS productDescription, products.product_quantity AS productQuantity, products.product_price AS productPrice, products.product_image AS productImage, products.product_category AS productCategoryId, product_categories.product_category_name AS productCategoryName, products.product_created_at AS productCreatedAt, products.product_updated_at AS productUpdatedAt FROM products INNER JOIN product_categories ON products.product_category = product_categories.product_category_id";
    connection.query(query, (error, results, fields) => {
      if (!error) {
        res.json({
          code: 200,
          status: "Success",
          data: results,
        });
      } else {
        console.error(error);
        res.status(500).json({
          code: 500,
          status: "Error",
          message: "Internal Server Error",
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      status: "Error",
      message: "Internal Server Error",
    });
  }
};
exports.getProductBySearch = (req, res) => {
  let searchQuery = req.query.q;
  try {
    let query =
      "SELECT products.product_id AS productId, products.product_name AS productName, products.product_description AS productDescription, products.product_quantity AS productQuantity, products.product_price AS productPrice, products.product_image AS productImage, products.product_category AS productCategoryId, product_categories.product_category_name AS productCategoryName, products.product_created_at AS productCreatedAt, products.product_updated_at AS productUpdatedAt FROM products INNER JOIN product_categories ON products.product_category = product_categories.product_category_id WHERE LOWER(products.product_name) LIKE '%" +
      searchQuery +
      "%'";
    connection.query(query, (error, results, fields) => {
      if (!error) {
        res.json({
          code: 200,
          status: "Success",
          data: results,
        });
      } else {
        console.error(error);
        res.status(500).json({
          code: 500,
          status: "Error",
          message: "Internal Server Error",
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      status: "Error",
      message: "Internal Server Error",
    });
  }
};
exports.getProductByCategory = (req, res) => {
  let categoryName = req.params.categoryName;
  let query =
    "SELECT products.product_id AS productId, products.product_name AS productName, products.product_description AS productDescription, products.product_quantity AS productQuantity, products.product_price AS productPrice, products.product_image AS productImage, products.product_category AS productCategoryId, product_categories.product_category_name AS productCategoryName, products.product_created_at AS productCreatedAt, products.product_updated_at AS productUpdatedAt FROM products INNER JOIN product_categories ON products.product_category = product_categories.product_category_id WHERE LOWER(product_categories.product_category_name) LIKE '%" +
    categoryName +
    "%'";
  try {
    connection.query(query, (error, results) => {
      if (!error) {
        res.status(200);
        res.json({
          code: 200,
          status: "Success",
          data: results,
        });
      } else {
        console.error(error);
        res.status(500).json({
          code: 500,
          status: "Error",
          message: "Internal Server Error",
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      status: "Error",
      message: "Internal Server Error",
    });
  }
};
exports.getProductsId = (req, res) => {
  let productId = null;
  if (!isNaN(req.params.productId)) {
    productId = parseInt(req.params.productId, 10);
  }
  let query =
    "SELECT products.product_id AS productId, products.product_name AS productName, products.product_description AS productDescription, products.product_quantity AS productQuantity, products.product_price AS productPrice, products.product_image AS productImage, products.product_category AS productCategoryId, product_categories.product_category_name AS productCategoryName, products.product_created_at AS productCreatedAt, products.product_updated_at AS productUpdatedAt FROM products INNER JOIN product_categories ON products.product_category = product_categories.product_category_id WHERE products.product_id = " +
    productId +
    "";
  try {
    connection.query(query, (error, results) => {
      if (!error) {
        res.status(200);
        res.json({
          code: 200,
          status: "Success",
          data: results,
        });
      } else {
        console.error(error);
        res.status(500).json({
          code: 500,
          status: "Error",
          message: "Internal Server Error",
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      status: "Error",
      message: "Internal Server Error",
    });
  }
};
exports.postProducts = (req, res) => {
  let query =
    "INSERT INTO products (product_name, product_description, product_quantity, product_price, product_image, product_category, product_created_at) VALUES ('" +
    req.body.productName +
    "', '" +
    req.body.productDescription +
    "', " +
    req.body.productQuantity +
    ", " +
    req.body.productPrice +
    ", '" +
    req.body.productImage +
    "', " +
    req.body.productCategoryId +
    ", NOW())";
  try {
    connection.query(query, (error, results) => {
      if (!error) {
        res.status(200);
        res.json({
          code: 200,
          status: "Success",
          message: "Data Berhasil Di Upload",
        });
      } else {
        console.error(error);
        res.status(500).json({
          code: 500,
          status: "Error",
          message: "Internal Server Error",
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      status: "Error",
      message: "Internal Server Error",
    });
  }
};
exports.putProducts = (req, res) => {
  try {
    let query =
      "UPDATE products SET product_name='" +
      req.body.productName +
      "', product_description='" +
      req.body.productDescription +
      "', product_quantity='" +
      req.body.productQuantity +
      "', product_price=" +
      req.body.productPrice +
      ", product_image='" +
      req.body.productImage +
      "', product_category=" +
      req.body.productCategoryId +
      ", product_updated_at = NOW()" +
      " WHERE product_id=" +
      req.params.productId +
      "";
    connection.query(query, (error, results, fields) => {
      if (!error) {
        res.json({
          code: 200,
          status: "Success",
          message: "Data Berhasil Di Update",
        });
      } else {
        console.error(error);
        res.status(500).json({
          code: 500,
          status: "Error",
          message: "Internal Server Error",
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      status: "Error",
      message: "Internal Server Error",
    });
  }
};
exports.deleteProducts = (req, res) => {
  try {
    let query =
      "DELETE FROM products WHERE product_id='" + req.params.productId + "'";
    connection.query(query, (error, results, fields) => {
      if (!error) {
        res.json({
          code: 200,
          status: "Success",
          message: "Data Berhasil Di Hapus",
        });
      } else {
        console.error(error);
        res.status(500).json({
          code: 500,
          status: "Error",
          message: "Internal Server Error",
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      status: "Error",
      message: "Internal Server Error",
    });
  }
};
