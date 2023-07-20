const express = require("express");
const env = require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json({ extended: true }));

var register = require("./src/routes/register.js");
var customer = require("./src/routes/customer.js");
var wishlist = require("./src/routes/wishlist.js");

app.use(cors());
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.use("/api/customer/wishlist", wishlist);
app.use("/api/customer/register", register);
app.use("/api/customer", customer);
app.get("/api", (req, res) => {
  res.json({
    status: true,
    code: 200,
    message: "SUCCESS",
    api: "== customer service ==",
  });
});
app.get("/", (req, res) => {
  res.json({
    status: true,
    code: 200,
    message: "SUCCESS",
    api: "== customer service ==",
  });
});

app.listen(8001, () => {
  console.log("== customer service ==");
  console.log(`server listening at http://localhost:8001`);
});
