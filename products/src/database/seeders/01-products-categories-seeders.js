// YYYYMMDDHHMMSS-product-categories-seeders.js

"use strict";
// const { v4: uuidv4 } = require('uuid'); // import UUID

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("product_categories", [
      {
        //product_category_id: uuidv4(), // Generate a UUID
        product_category_id: "3dbb7910-cb9a-4ef1-8ab1-3e30db3e8336",
        product_category_name: "Computer",
        product_category_description: "Description for Computer Products",
        product_category_created_at: new Date(),
        product_category_updated_at: null,
      },
      {
        //product_category_id: uuidv4(), // Generate a UUID
        product_category_id: "455b3676-0665-489f-9193-bf6ffe06e97f",
        product_category_name: "Gadget",
        product_category_description: "Description for Gadget Products",
        product_category_created_at: new Date(),
        product_category_updated_at: null,
      },
      {
        //product_category_id: uuidv4(), // Generate a UUID
        product_category_id: "f348e846-78c7-46d5-bfbf-db686081492d",
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
