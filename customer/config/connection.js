const mysql = require("mysql");
require("dotenv").config();

dbdata = {
  host: process.env.CUSTOMERSERVICE_DBHOST,
  user: process.env.CUSTOMERSERVICE_DBUSER,
  password: process.env.CUSTOMERSERVICE_DBPASS,
  database: process.env.CUSTOMERSERVICE_DBNAME,
};
var connection = mysql.createConnection(dbdata);
connection.connect(function (err) {
  if (err) throw err;
  console.log("- connected successfully to DB ...");
});

module.exports = {
  connection: mysql.createConnection(dbdata),
};
