const express = require("express");
const router = express.Router();
// import function from customerController
const productsController = require("./products.controller");

router.get("/", productsController.getProducts);
router.get("/category", productsController.getProductByCategory);

//export this router to use in our index.js
module.exports = router;
