const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/users')

function isAuthenticated(req, res, next) {
  if(req.session.isLogged)
    return next()

  return res.redirect('/login')
}

function isGuest(req, res, next) {
  if(req.session.isLogged)
    return res.redirect('/home')
  
  return next()
}

routes.get('/', (req, res) => {
  res.render('index', { layout: 'default', title: 'Cobertura' })
})

routes.get('/login', isGuest, (req, res) => {
  res.render('login', { layout: 'default', title: 'Cobertura: Acesse sua conta já'})
})
routes.get('/imoveis', (req, res) => {
  res.render('imoveis', { layout: 'default' })
})

routes.get('/home', (req, res) => {
  res.send('ESTOU LOGADO')
})

routes.post('/auth', (req, res) => {
  console.log(req.body)
  return res.status(200).json({ ok: 'failed' })
})

routes.get('/perfil/:url', UserController.getById)

module.exports = routes;