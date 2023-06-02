const env = require('dotenv').config();
const mysql = require('mysql');

dbdata = {
  host: "192.168.7.61",
  user: "root",
  password: "ijinmasuk",
  database: "productservicedb"
}
var connection = mysql.createConnection(dbdata);
connection.connect(function(err){
    if (err) throw err
    console.log('- connected successfully to DB ...');
});

module.exports = {
    connection : mysql.createConnection(dbdata)
}