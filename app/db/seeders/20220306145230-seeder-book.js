'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Books', [
      {
        title: 'David Bacth: Faktor Latte',
        author: 'David Bacth',
        image: 'uploads/image_1.png',
        published: new Date(),
        price: 20000,
        stock: 10,
        category: 1,
        user: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '"Selena" dan "Nebula"',
        author: 'TERE LIYE',
        image: 'uploads/image_2.png',
        published: new Date(),
        price: 35000,
        stock: 10,
        category: 2,
        user: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: 'Salvation of a Saint',
        author: 'Keigo Higashino',
        image: 'uploads/image_3.png',
        published: new Date(),
        price: 40000,
        stock: 10,
        category: 3,
        user: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Books', null, {});

  }
};
