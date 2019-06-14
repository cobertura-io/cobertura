const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/users')

routes.get('/', (req, res) => {
  res.render('login', { layout: 'default' })
})
routes.get('/perfil/:url', UserController.getById)

module.exports = routes;