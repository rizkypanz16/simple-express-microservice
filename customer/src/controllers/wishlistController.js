const config = require("../../config/connection");
var connection = config.connection;

exports.getWishlist = (req, res) => {
  connection.query(
    "SELECT wishlist_id AS wishlistId, customer_id AS customerId, product_id AS productID, wishlist_quantity AS wishlistQuantity FROM customer_wishlist",
    (error, results, fields) => {
      if (error) throw error;
      res.status(200);
      res.json({
        status: "OK",
        data: results,
      });
    }
  );
};

exports.getWishlistId = (req, res) => {
  connection.query(
    "SELECT wishlist_id AS wishlistId, customer_id AS customerId, product_id AS productID, wishlist_quantity AS wishlistQuantity FROM customer_wishlist WHERE wishlist_id = '" +
      req.params.wishlistId +
      "'",
    (error, results, fields) => {
      if (error) throw error;
      res.status(200);
      res.json({
        status: "OK",
        data: results,
      });
    }
  );
};

exports.postWishlist = (req, res) => {
  var query =
    "INSERT INTO customer_wishlist (customer_id, product_id, wishlist_quantity) VALUES ('" +
    req.body.customerId +
    "', '" +
    req.body.productId +
    "', '" +
    req.body.wishlistQuantity +
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
  var query =
    "DELETE FROM customer_wishlist WHERE wishlist_id='" +
    req.params.wishlistId +
    "'";
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.status(200);
    res.json({
      status: "SUCCESS",
      data: [],
    });
  });
};
