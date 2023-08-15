const express = require("express");
const router = express.Router();
// import function from customerController
const productsController = require("./../controllers/productsController.js");

router.get("/search", productsController.getProductBySearch);
router.get("/category/:categoryName", productsController.getProductByCategory);
router.get(
  "/customer-wishlist/:customerId",
  productsController.getCustomerWishlist
);
router.get("/:productId", productsController.getProductsId);
router.post("/", productsController.postProducts);
router.put("/:productId", productsController.putProducts);
router.delete("/:productId", productsController.deleteProducts);

//export this router to use in our index.js
module.exports = router;
