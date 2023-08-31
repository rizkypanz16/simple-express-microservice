const express = require("express");
const env = require("dotenv").config();
const morgan = require('morgan');
const PORT = 8002;
const cors = require("cors");
const app = express();
require("./config/swagger")(app); // Set up Swagger

let product = require("./services/products/product.routes");
let productCategories = require("./services/product-categories/product-categories.routes");
let products = require("./services/products/products.routes");
let responseService = require("./helpers/responseProductService");

app.use(cors());
app.use(express.json({ extended: true }));
app.use(morgan('combined'));  // Use morgan for logging requests
// app.use(responseService.log);  // Use for logging requests
app.use("/api/product", product);
app.use("/api/products", products);
app.use("/api/product-categories", productCategories);
app.get("/api", responseService.api);

app.listen(PORT, () => {
  console.log("== Starting: products service ==");
  console.log(`server listening at http://localhost:${PORT}`);
});
