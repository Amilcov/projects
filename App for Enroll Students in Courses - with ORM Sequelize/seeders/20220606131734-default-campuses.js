'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Campuses', [
     { name: 'Valdivia', createdAt: new Date(), updatedAt: new Date() },
     { name: 'Bangor', createdAt: new Date(), updatedAt: new Date() },
     { name: 'Chatillon', createdAt: new Date(), updatedAt: new Date() },
     { name: 'Filacciano', createdAt: new Date(), updatedAt: new Date() }
   ])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Campuses', {})
  }
};
