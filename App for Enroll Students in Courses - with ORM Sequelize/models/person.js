'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       const mappingColums = {
        through: 'Enrollments',
        otherKey: 'courseId',
        foreignKey: 'personId'
      }
      Person.belongsToMany(models.Course, mappingColums);
    }
  }
  Person.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};