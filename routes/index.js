'use strict'

const express = require('express')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const middleware = require('../services/middleware');
const api = express.Router()


api.post('/authenticate', authController.login)
api.post('/users', userController.create)
api.get('/users', middleware.ensureAuthenticated, userController.getUsers)
api.delete('/users/:userId', middleware.ensureAuthenticated, userController.deleteUser)


module.exports = api
