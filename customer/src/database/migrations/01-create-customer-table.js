// XXXXXXXXXXXXXX-create-customer-table.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customer', {
      customer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      customer_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
	  customer_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_phone: {
        type: Sequelize.STRING,
      },
      customer_address: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
	  customer_created_at: {
        type: Sequelize.DATE,
      },
      customer_updated_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customer');
  },
};
