const usersRouter = require('express').Router()
const { User, Recipe } = require('../models/index')
const bcrypt = require('bcrypt')


usersRouter.get('/', async (req, res) => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] }, 
        include: {
            model: Recipe,
            attributes: ['name']
        }});
    res.status(200).json(users)
})

usersRouter.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.status(200).json(user)
})

usersRouter.post('/', async (req, res) => {
    const passwordHash = await bcrypt.hash(req.body.password, 10)
    const user = {...req.body, password: passwordHash}
    console.log(user)
    User.create(user)
    res.status(200).end()
})

usersRouter.delete('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    user.destroy()
    res.status(204).end()
})

module.exports = usersRouter