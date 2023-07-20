// YYYYMMDDHHMMSS-products-seeders.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        product_name: 'Product 1',
        product_description: 'Description for Product 1',
        product_quantity: 100,
        product_price: 50,
        product_image: 'product1.jpg',
        product_category: 1,
        product_created_at: new Date(),
        product_updated_at: new Date(),
      },
      // Add more data here if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
