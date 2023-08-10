const env = require("dotenv").config();
const mysql = require("mysql");

dbdata = {
  host: process.env.PRODUCT_DBHOST,
  user: process.env.PRODUCT_DBUSER,
  password: process.env.PRODUCT_DBPASS,
  database: process.env.PRODUCT_DBNAME,
};
var connection = mysql.createConnection(dbdata);
connection.connect(function (err) {
  if (err) console.log(err.code);
  console.log("- connected successfully to DB ...");
});

module.exports = {
  connection: mysql.createConnection(dbdata),
};
