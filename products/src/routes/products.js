var express = require("express");
var router = express.Router();

// import function from customerController
const productsController = require("./../controllers/productsController.js");

router.get("/", productsController.getProducts);

router.post("/", productsController.postProducts);

// router.get('/:productId', productsController.getProductsId);

// router.put('/:productId', productsController.putProducts);

router.delete("/:productId", productsController.deleteProducts);

//export this router to use in our index.js
module.exports = router;
