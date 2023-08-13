const express = require("express");
const router = express.Router();
// import function from customerController
const productsController = require("./../controllers/productsController.js");

router.get("/", productsController.getProducts);

//export this router to use in our index.js
module.exports = router;
