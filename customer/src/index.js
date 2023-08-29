require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = 8001;
const app = express();
require("./config/swagger")(app);  // Set up Swagger
const wishlist = require("./services/wishlist/wishlist.routes");
const customer = require("./services/customer/customer.routes");
const register = require("./services/register/register.routes");
const responseService = require('./helpers/responseCustomerService');

app.use(cors());
app.use(express.json({ extended: true }));
app.use(responseService.log);
app.use("/api/customer/wishlist", wishlist);
app.use("/api/customer/register", register);
app.use("/api/customer", customer);
app.get("/api", responseService.api);

app.listen(PORT, () => {
  console.log("== StartingL: customer service ==");
  console.log(`server listening at http://localhost:${PORT}`);
});
