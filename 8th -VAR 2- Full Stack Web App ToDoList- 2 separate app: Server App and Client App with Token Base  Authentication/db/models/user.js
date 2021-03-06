'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull:false,
      type: DataTypes.STRING,
      unique: true
    },
    hashedPassword: {
      allowNull:false,
      type: DataTypes.STRING.BINARY
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};