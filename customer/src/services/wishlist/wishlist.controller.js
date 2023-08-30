const connection = require("../../config/database");

exports.getWishlist = (req, res) => {
  let query = "SELECT wishlist_id AS wishlistId, customer_id AS customerId, product_id AS productID, wishlist_quantity AS wishlistQuantity FROM customer_wishlist";
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

exports.getWishlistId = (req, res) => {
  let query = "SELECT wishlist_id AS wishlistId, customer_id AS customerId, product_id AS productID, wishlist_quantity AS wishlistQuantity FROM customer_wishlist WHERE wishlist_id = '";
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

exports.postWishlist = (req, res) => {
  let query =
    "INSERT INTO customer_wishlist (customer_id, product_id, wishlist_quantity) VALUES ('" +
    req.body.customerId +
    "', '" +
    req.body.productId +
    "', '" +
    req.body.wishlistQuantity +
    "')";
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

exports.putWishlist = (req, res) => {
  res.json({
    status: true,
    code: 200,
    message: "SUCCESS",
    method: "PUT",
    API: "wishlist/wishlistId",
    data: [],
  });
};

exports.deleteWishlist = (req, res) => {
  let query =
    "DELETE FROM customer_wishlist WHERE wishlist_id='" +
    req.params.wishlistId +
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
