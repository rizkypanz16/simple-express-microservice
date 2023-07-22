const express = require("express");
const env = require("dotenv").config();
const PORT = 8002;
const cors = require("cors");

const app = express();

app.use(express.json({ extended: true }));

var products = require("./src/routes/products");
var productCategories = require("./src/routes/productCategories");

app.use(cors());
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.use("/api/products", products);
app.use("/api/product-categories", productCategories);
app.get("/api", (req, res) => {
  res.json({
    status: true,
    code: 200,
    message: "SUCCESS",
    api: "== products service ==",
  });
});

app.listen(PORT, () => {
  console.log("== products service ==");
  console.log(`server listening at http://localhost:8002`);
});
