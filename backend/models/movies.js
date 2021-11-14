'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  movies.init({
    title: DataTypes.STRING,
    ratings: DataTypes.NUMERIC,
    image: DataTypes.STRING,
    video: DataTypes.BOOLEAN,
    language_id: DataTypes.INTEGER,
    director_id: DataTypes.INTEGER,
    actor_id: DataTypes.INTEGER,
    release_date: DataTypes.DATE,
    overview: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};