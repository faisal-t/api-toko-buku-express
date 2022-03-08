'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    let password = bcrypt.hashSync('password',10);

    await queryInterface.bulkInsert('Users', [{
      username: 'John Doe',
      email: 'admin@gmail.com',
      password: password,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
