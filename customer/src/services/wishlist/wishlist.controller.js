const axios = require('axios');
const connection = require("../../config/database");

exports.getWishlist = (req, res) => {
  let query = "SELECT wishlist_id AS wishlistId, customer_id AS customerId, product_id AS productId, wishlist_created_at AS wishlistCreatedAt FROM customer_wishlist";
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

exports.getCustomerWishlist = (req, res) => {
  const customerId = req.params.customerId;
  let query = "SELECT wishlist_id AS wishlistId, customer_id AS customerId, product_id AS productId, wishlist_created_at AS wishlistCreatedAt FROM customer_wishlist WHERE customer_id = '" + customerId + "' ORDER BY product_id ASC";
  try {
    connection.query(query, async (error, results, fields) => {
      if (!error) {
        let customerProductId = results.map((row) => row.productId); //get customer wishlist product_id
        // console.log(customerProductId); // menampilkan hasil query
        if (customerProductId.length > 0) {
          results = JSON.parse(JSON.stringify(results));
          try {
            const productsResponse = await axios.post('http://localhost:8002/api/product/details', { customerProductId });
            const productsResponseData = productsResponse.data.data;
            // console.log(results);
            const mergedData = [];
            results.forEach(wishlistItem => {
              // Find the corresponding product in the product array
              const correspondingProduct = productsResponseData.find(product => product.productId === wishlistItem.productId);
              if (correspondingProduct) {
                // Merge the data
                const mergedItem = {
                  ...wishlistItem,
                  productDetails: correspondingProduct
                };
                mergedData.push(mergedItem);
              }
            });
            results = mergedData;
            // console.log(results);
            res.json({
              code: 200,
              status: "Success",
              data: results,
            });
          } catch (error) {
            console.error(error);
            res.status(500).json({
              code: 500,
              status: "Error",
              message: "Internal Server Error",
            });
          }
        } else {
          // jika query results null
          res.status(200).json({
            code: 200,
            status: "Success",
            data: [],
          });
        }
      } else {
        // jika query error
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
  let wishlistId = req.params.wishlistId;
  let query = "SELECT wishlist_id AS wishlistId, customer_id AS customerId, product_id AS productId, wishlist_created_at AS wishlistCreatedAt FROM customer_wishlist WHERE wishlist_id = '" + wishlistId + "'";
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
