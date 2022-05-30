'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    amount: {
      type: DataTypes.NUMBER,
      validate: {
        notEmpty: true
      }
    },
    measurementUnitId: {
      type: DataTypes.NUMBER,
      validate: {
        notEmpty: true
      }
    },
    foodStuff: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    recipeId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Ingredient.associate = function(models) {
    // associations can be defined here
    Ingredient.belongsTo(models.MeasurementUnit, {foreignKey: 'measurementUnitId'})
    Ingredient.belongsTo(models.Recipe, {foreignKey: 'recipeId'})
  };
  return Ingredient;
};