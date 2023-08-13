// YYYYMMDDHHMMSS-product-categories-seeders.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("product_categories", [
      {
        product_category_name: "Product Category 1",
        product_category_description: "Description for Product Category 1",
        product_category_created_at: new Date(),
        product_category_updated_at: new Date(),
      },
      {
        product_category_name: "Product Category 2",
        product_category_description: "Description for Product Category 2",
        product_category_created_at: new Date(),
        product_category_updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("product_categories", null, {});
  },
};
