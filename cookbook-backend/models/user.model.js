const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.init')

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
  isVegan: DataTypes.BOOLEAN
})


module.exports = User