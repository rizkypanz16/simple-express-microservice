// XXXXXXXXXXXXXX-create-products-table.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      product_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      product_description: {
        type: Sequelize.TEXT,
      },
      product_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_image: {
        type: Sequelize.TEXT,
      },
      product_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_created_at: {
        type: Sequelize.DATE,
      },
      product_updated_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  },
};
