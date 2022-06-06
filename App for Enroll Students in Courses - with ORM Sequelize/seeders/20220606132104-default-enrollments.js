'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     return queryInterface.bulkInsert('Enrollments', [
      { personId: 3, courseId: 7, createdAt: new Date(), updatedAt: new Date() },
      { personId: 3, courseId: 1, createdAt: new Date(), updatedAt: new Date() },
      { personId: 3, courseId: 4, createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, courseId: 4, createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, courseId: 6, createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, courseId: 1, createdAt: new Date(), updatedAt: new Date() },
      { personId: 3, courseId: 5, createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, courseId: 5, createdAt: new Date(), updatedAt: new Date() }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Enrollments', {});
  }
};
