// XXXXXXXXXXXXXX-create-products-categories-table.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_categories', {
      product_category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      product_category_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      product_category_description: {
        type: Sequelize.TEXT,
      },
      product_category_created_at: {
        type: Sequelize.DATE,
      },
      product_category_updated_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product_categories');
  },
};
