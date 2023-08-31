require("dotenv").config();
const mysql = require("mysql");

let pool = mysql.createPool({
  connectionLimit: 4,
  host: process.env.PRODUCTSERVICE_DBHOST,
  user: process.env.PRODUCTSERVICE_DBUSER,
  password: process.env.PRODUCTSERVICE_DBPASS,
  database: process.env.PRODUCTSERVICE_DBNAME,
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
