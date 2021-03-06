'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('People', [
      {firstName: 'Daniel', lastName: 'Hays', email: 'Cras.sed.leo@Vivamusmolestie.co.uk', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Wade', lastName: 'Woodard', email: 'massa.Integer@lectus.ca', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Frances', lastName: 'Rosales', email: 'ligula@velitduisemper.ca', createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('People', {})
  }
};
