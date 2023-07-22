const { Sequelize } = require("sequelize");

// database/config/config.js
require("dotenv").config();

module.exports = {
  development: {
    dialect: "mysql",
    username: process.env.CUSTOMERSERVICE_DBUSER,
    password: process.env.CUSTOMERSERVICE_DBPASS,
    database: process.env.CUSTOMERSERVICE_DBNAME,
    host: process.env.CUSTOMERSERVICE_DBHOST,
    port: process.env.CUSTOMERSERVICE_DBPORT,
    logging: false,
  },
};

// how to run migration
// npm run db:migrate or npx sequelize db:migrate

// how to run seeders
// npm run db:seeders or npx sequelize db:seed:all
