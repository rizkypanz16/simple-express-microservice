require("dotenv").config();
const mysql = require("mysql");

let pool = mysql.createPool({
  connectionLimit: 4,
  host: process.env.CUSTOMERSERVICE_DBHOST,
  user: process.env.CUSTOMERSERVICE_DBUSER,
  password: process.env.CUSTOMERSERVICE_DBPASS,
  database: process.env.CUSTOMERSERVICE_DBNAME,
});

pool.getConnection((err, connection) => {
  if (!err) {
    console.log(
      `[${new Date().toISOString()}] [INFO] Database connected successfully`
    );
    connection.release();
  } else {
    console.error(
      `[${new Date().toISOString()}] [ERROR] Database not connected: `
    );
    console.error(err);
  }
});

module.exports = pool;
