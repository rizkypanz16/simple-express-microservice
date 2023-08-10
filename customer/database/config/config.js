const { Sequelize } = require("sequelize");

// database/config/config.js
require("dotenv").config();

module.exports = {
  development: {
    dialect: "mysql",
    username: process.env.CUSTOMER_DBUSER,
    password: process.env.CUSTOMER_DBPASS,
    database: process.env.CUSTOMER_DBNAME,
    host: process.env.CUSTOMER_DBHOST,
    port: process.env.CUSTOMER_DBPORT,
    logging: false,
  },
};

// how to run migration
// npm run db:migrate or npx sequelize db:migrate

// how to run seeders
// npm run db:seeders or npx sequelize db:seed:all
