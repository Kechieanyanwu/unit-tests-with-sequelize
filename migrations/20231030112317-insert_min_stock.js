'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.sequelize.transaction( async (t) => {
      await queryInterface.addColumn("Products", "min_stock", {
        type: Sequelize.DataTypes.INTEGER,
        //i think if i include allow null, all the current entries will be void
      })
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.sequelize.transaction( async (t) => {
      await queryInterface.removeColumn("Products", "min_stock")
    })

  }
};
