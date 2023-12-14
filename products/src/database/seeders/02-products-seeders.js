// YYYYMMDDHHMMSS-products-seeders.js

'use strict';
const { v4: uuidv4 } = require('uuid'); // import UUID

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        product_id: uuidv4(), // Generate a UUID
        product_name: 'iphone 12',
        product_description: '-',
        product_quantity: 12,
        product_price: 8500000,
        product_image: 'iphone-12.jpg',
        product_category: '455b3676-0665-489f-9193-bf6ffe06e97f',
        product_created_at: new Date(),
        product_updated_at: null,
      },
      {
        product_id: uuidv4(), // Generate a UUID
        product_name: 'imac 2023',
        product_description: '-',
        product_quantity: 12,
        product_price: 8500000,
        product_image: 'imac-2023.jpg',
        product_category: '3dbb7910-cb9a-4ef1-8ab1-3e30db3e8336',
        product_created_at: new Date(),
        product_updated_at: null,
      },
      // Add more data here if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
