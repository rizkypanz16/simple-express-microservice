const express = require("express");
const router = express.Router();
// import function from customerController
const productsController = require("./../controllers/productsController.js");

router.post("/", productsController.postProducts);
router.get("/:productId", productsController.getProductsId);
router.put("/:productId", productsController.putProducts);
router.delete("/:productId", productsController.deleteProducts);

//export this router to use in our index.js
module.exports = router;
