// database/config/config.js
const env = require("dotenv").config();

module.exports = {
  development: {
    dialect: "mysql",
    username: process.env.PRODUCT_DBUSER,
    password: process.env.PRODUCT_DBPASS,
    database: process.env.PRODUCT_DBNAME,
    host: process.env.PRODUCT_DBHOST,
    port: process.env.PRODUCT_DBPORT,
    logging: false,
  },
};
