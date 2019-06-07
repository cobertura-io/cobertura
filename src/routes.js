const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/users')
const UserDAO = require('./models/userDAO')

routes.get('/perfil', UserController.index)
routes.get('/perfil/:id', UserController.indexID)

module.exports = routes;