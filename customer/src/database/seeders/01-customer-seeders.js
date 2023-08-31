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
        customer_updated_at: null,
      },
      {
        customer_name: 'Customer 2',
        customer_email: 'customer2@localhost.localdomain',
        customer_phone: '0820000002',
        customer_address: 'Indonesia',
        customer_created_at: new Date(),
        customer_updated_at: null,
      },
      {
        customer_name: 'Customer 3',
        customer_email: 'customer3@localhost.localdomain',
        customer_phone: '0830000003',
        customer_address: 'Indonesia',
        customer_created_at: new Date(),
        customer_updated_at: null,
      },
      {
        customer_name: 'Customer 4',
        customer_email: 'customer1@localhost.localdomain',
        customer_phone: '0840000004',
        customer_address: 'Indonesia',
        customer_created_at: new Date(),
        customer_updated_at: null,
      },
      // Add more data here if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customer', null, {});
  },
};
