'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Departments', [
     { name: 'Economics', createdAt: new Date(), updatedAt: new Date() },
     { name: 'Mathematics', createdAt: new Date(), updatedAt: new Date() },
     { name: 'Music', createdAt: new Date(), updatedAt: new Date() },
   ])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Departments', {})
  }
};
