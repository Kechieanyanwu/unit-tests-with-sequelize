'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.sequelize.transaction(async (t) => {
    await queryInterface.bulkInsert("Products", [
      {
        name: "Salmon",
        price: 10.0,
        stock: 5,
        min_stock: 2,
    created_at: "2023-10-30T14:14:01.390Z",
    updated_at: "2023-10-30T14:14:01.390Z",
      },
      {
        name: "Chicken",
        price: 6.5,
        stock: 5,
        min_stock: 10,
    created_at: "2023-10-30T14:14:01.390Z",
    updated_at: "2023-10-30T14:14:01.390Z",
      },
      {
        name: "Turkey",
        price: 5.5,
        stock: 5,
        min_stock: 5,
    created_at: "2023-10-30T14:14:01.390Z",
    updated_at: "2023-10-30T14:14:01.390Z",
      },
     ])
   })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.bulkDelete("Products", null, {})
    })
  }
};
