const { Sequelize } = require('sequelize');
const {database, user, password, host, port} = require('./db.config')

const sequelize = new Sequelize(database, user, password, {
    host: host,
    port: port,
    dialect: 'postgres',
    logging: false
  })
  
module.exports = {
    sequelize
}