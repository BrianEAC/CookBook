const recipesRouter = require('express').Router()
const { Recipe, User } = require('../models/index')
const jwt = require('jsonwebtoken')

const getTokenFrom = req => { 
    const authorization = req.get('authorization') 
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) { 
        return authorization.substring(7)  
    }  
    return null
}

recipesRouter.get('/', async (req, res) => {
    const recipes = await Recipe.findAll({ 
        include: {
            model: User,
            attributes: ['username']
        }});
    res.status(200).json(recipes)
})

recipesRouter.get('/:id', async (req, res) => {
    const recipe = await Recipe.findByPk(req.params.id)
    res.status(200).json(recipe)
})


recipesRouter.post('/', async (req, res, next) => {
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if(!decodedToken.id) {
        return res.status(401).json({error: 'token missing or invalid'})
    }
    const user = await User.findByPk(decodedToken.id)
    if ( req.body.instructions === '' || req.body.ingredients === '') {    
        return res.status(400).json({ error: 'content missing' }) 
    }
    const recipeBody = {...req.body, UserId: user.id}
    const recipe =  await Recipe.create(recipeBody)
    res.status(201).json(recipe)
})

recipesRouter.delete('/:id', async (req, res) => {
    const recipe = await Recipe.findByPk(req.params.id);
    if(recipe) {
        await recipe.destroy()
    }
    res.status(204).end()
})


module.exports = recipesRouter