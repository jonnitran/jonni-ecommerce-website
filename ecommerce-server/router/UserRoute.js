const express = require('express')
const user = require('../controller/UserController')
const router = express.Router()

const { authMiddleware } = require('../controller/UserController')

router.post('/register', user.register)

router.post('/login', user.login)

router.get('/profile', authMiddleware, function (req, res) {
  res.json({ 'access': true })
})

module.exports = router