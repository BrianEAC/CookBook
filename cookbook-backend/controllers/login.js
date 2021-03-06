const loginRouter = require('express').Router()
const { User } = require('../models/index')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

loginRouter.post('/', async (req, res) => {
    const { username, password, id } = req.body
    const user = await User.findOne({where: {username: username}})
    const passwordCorrect = user === null ?
                            false :
                            await bcrypt.compare(password, user.password)

    if (!(user && passwordCorrect)) {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }

    
  const userForToken = {
    username: user.username,
    id: user.UserId,
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  res
    .status(200)
    .send({ token, username: user.username, name: user.name })
})


module.exports = loginRouter