// YYYYMMDDHHMMSS-customer-seeders.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('customer', [
      {
        customer_name: 'Customer 1',
        customer_email: 'customer1@localhost.localdomain',
        customer_phone: '0810000001',
        customer_address: 'Indonesia',
        customer_created_at: new Date(),
        customer_updated_at: new Date(),
      },
      // Add more data here if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customer', null, {});
  },
};
