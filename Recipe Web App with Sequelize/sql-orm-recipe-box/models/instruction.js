'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    specification: {
       type: DataTypes.STRING,
       validate: {
        notEmpty: true
      }
    },
    listOrder: {
      type: DataTypes.INTEGER,
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
  Instruction.associate = function(models) {
    // associations can be defined here
     Instruction.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
  };
  return Instruction;
};