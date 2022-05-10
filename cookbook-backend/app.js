const express = require('express')
const http = require('http')
const cors = require('cors')
const recipesRouter = require('./controllers/recipes')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

const app = express()

app.use(cors())
app.use(express.static('build'));
app.use(express.json())
app.use('/api/recipes', recipesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

module.exports = app