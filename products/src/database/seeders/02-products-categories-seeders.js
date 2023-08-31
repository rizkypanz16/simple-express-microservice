// YYYYMMDDHHMMSS-product-categories-seeders.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("product_categories", [
      {
        product_category_name: "Computer",
        product_category_description: "Description for Computer Products",
        product_category_created_at: new Date(),
        product_category_updated_at: null,
      },
      {
        product_category_name: "Gadget",
        product_category_description: "Description for Gadget Products",
        product_category_created_at: new Date(),
        product_category_updated_at: null,
      },
      {
        product_category_name: "Gadget Accessories",
        product_category_description: "Description for Gadget Accessories Products",
        product_category_created_at: new Date(),
        product_category_updated_at: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("product_categories", null, {});
  },
};
