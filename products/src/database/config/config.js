// database/config/config.js
const env = require("dotenv").config();

module.exports = {
  development: {
    dialect: "mysql",
    username: process.env.PRODUCTSERVICE_DBUSER,
    password: process.env.PRODUCTSERVICE_DBPASS,
    database: process.env.PRODUCTSERVICE_DBNAME,
    host: process.env.PRODUCTSERVICE_DBHOST,
    port: process.env.PRODUCTSERVICE_DBPORT,
    logging: false,
  },
};
