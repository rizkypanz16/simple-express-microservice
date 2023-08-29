const express = require("express");
const router = express.Router();
// import function from customerController
const productsController = require("./products.controller");

router.get("/", productsController.getProducts);

//export this router to use in our index.js
module.exports = router;
