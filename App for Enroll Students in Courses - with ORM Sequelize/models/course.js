'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       const mappingColums = {
        through: 'Enrollments',
        foreignKey: 'courseId',
        otherKey: 'personId'
      }
      Course.belongsToMany(models.Person, mappingColums);
      Course.belongsTo(models.Campus, {foreignKey: 'campusId'});
      Course.belongsTo(models.Department, {foreignKey: 'departmentId'})
    }
  }
  Course.init({
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    campusId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};