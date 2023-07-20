const env = require("dotenv").config();
const mysql = require("mysql");

dbdata = {
  host: "192.168.0.128",
  user: "customerservice",
  password: "ijinmasuk",
  database: "customerservicedb",
};
var connection = mysql.createConnection(dbdata);
connection.connect(function (err) {
  if (err) throw err;
  console.log("- connected successfully to DB ...");
});

module.exports = {
  connection: mysql.createConnection(dbdata),
};
