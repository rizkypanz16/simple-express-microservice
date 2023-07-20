var express = require("express");
var router = express.Router();

// import function from customerController
const customerController = require("./../controllers/customerController.js");

/**
 * @swagger
 * /api/customer:
 *   get:
 *     summary: Get all customer
 *     description: Get a list of all customer
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get("/", customerController.getCustomer);

router.get("/:customerId", customerController.getCustomerId);

router.put("/:customerId", customerController.putCustomer);

router.delete("/:customerId", customerController.deleteCustomer);

//export this router to use in our index.js
module.exports = router;
