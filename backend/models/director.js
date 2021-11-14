'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class director extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  director.init({
    dir_name: DataTypes.STRING,
    dir_gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'director',
  });
  return director;
};