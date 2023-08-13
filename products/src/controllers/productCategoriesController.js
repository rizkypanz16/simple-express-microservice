require("body-parser");
const connection = require("../../config/connection");

exports.getProductCategories = (req, res) => {
  let query =
    "SELECT product_category_id AS productCategoryId, product_category_name AS productCategoryName, product_category_description AS productCategoryDescription, product_category_created_at AS productCategoryCreatedAt, product_category_updated_at AS productCategoryUpdatedAt FROM product_categories";
  try {
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

exports.getProductCategoriesId = (req, res) => {
  let query =
    "SELECT product_category_id AS productCategoryId, product_category_name AS productCategoryName, product_category_description AS productCategoryDescription, product_category_created_at AS productCategoryCreatedAt, product_category_updated_at AS productCategoryUpdatedAt FROM product_categories WHERE product_category_id = '" +
    req.params.productCategoryId +
    "'";
  try {
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

exports.postProductCategories = (req, res) => {
  let query =
    "INSERT INTO product_categories (product_category_name, product_category_description) VALUES ('" +
    req.body.productCategoryName +
    "', '" +
    req.body.productCategoryDescription +
    "' )";
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

exports.putProductCategories = (req, res) => {
  let query =
    "UPDATE product_categories SET product_category_name='" +
    req.body.productCategoryName +
    "', product_category_description='" +
    req.body.productCategoryDescription +
    "' WHERE product_category_id=" +
    req.params.productCategoryId +
    "";
  try {
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

exports.deleteProductCategories = (req, res) => {
  let query =
    "DELETE FROM product_categories WHERE product_category_id='" +
    req.params.productCategoryId +
    "'";
  try {
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
