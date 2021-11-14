'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  actor.init({
    actor__name: DataTypes.STRING,
    actor_gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'actor',
  });
  return actor;
};