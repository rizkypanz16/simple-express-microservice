// YYYYMMDDHHMMSS-products-seeders.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        product_name: 'iphone 12',
        product_description: '-',
        product_quantity: 12,
        product_price: 8500000,
        product_image: 'iphone-12.jpg',
        product_category: 2,
        product_created_at: new Date(),
        product_updated_at: null,
      },
      {
        product_name: 'imac 2023',
        product_description: '-',
        product_quantity: 12,
        product_price: 8500000,
        product_image: 'imac-2023.jpg',
        product_category: 1,
        product_created_at: new Date(),
        product_updated_at: null,
      },
      {
        product_name: 'iphone 13',
        product_description: '-',
        product_quantity: 24,
        product_price: 12000000,
        product_image: 'iphone-13.jpg',
        product_category: 2,
        product_created_at: new Date(),
        product_updated_at: null,
      },
      {
        product_name: 'macbook pro 2020',
        product_description: '-',
        product_quantity: 6,
        product_price: 23000000,
        product_image: 'macbook-pro-2020.jpg',
        product_category: 1,
        product_created_at: new Date(),
        product_updated_at: null,
      },
      {
        product_name: 'macbook air 2019',
        product_description: '-',
        product_quantity: 8,
        product_price: 18000000,
        product_image: 'macbook-air-2019.jpg',
        product_category: 1,
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
