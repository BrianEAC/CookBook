const Recipe = require('./recipe.model')
const User = require('./user.model')
const { DataTypes } = require('sequelize')

User.hasMany(Recipe)
Recipe.belongsTo(User,{
    foreignKey: {
        name: 'UserId',
        type: DataTypes.UUID
    }
})

Recipe.sync({ alter: true })
User.sync({ alter: true })

module.exports = {
    Recipe,
    User
}