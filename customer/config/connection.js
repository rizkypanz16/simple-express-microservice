const mysql = require("mysql");
require("dotenv").config();

dbdata = {
  host: process.env.CUSTOMER_DBHOST,
  user: process.env.CUSTOMER_DBUSER,
  password: process.env.CUSTOMER_DBPASS,
  database: process.env.CUSTOMER_DBNAME,
};
var connection = mysql.createConnection(dbdata);
connection.connect(function (err) {
  if (err) throw err;
  console.log("- connected successfully to DB ...");
});

module.exports = {
  connection: mysql.createConnection(dbdata),
};
