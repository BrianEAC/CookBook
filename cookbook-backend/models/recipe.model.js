const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.init')

const Recipe = sequelize.define('Recipe', {
  name:  DataTypes.STRING,
  description: DataTypes.STRING,
  ingredients: DataTypes.STRING,
  isVegan: DataTypes.BOOLEAN
})


module.exports = Recipe