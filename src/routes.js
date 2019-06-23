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
  req.session.user = { name: 'Waldrey', surname: 'Souza Silva', avatar: 'avatar.png' }
  res.render('imoveis', { 
    layout: 'default', 
    title: 'Cobertura: Imóveis',
    houses: [{
      id: 0,
      title: 'Uma casa incrível',
      picture: 'https://images.pexels.com/photos/2287310/pexels-photo-2287310.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940',
      address: 'Cidade Morumbi',
      price: '570.000,00',
      bedroom: 3,
      bathroom: 4,
      garage: 2,
      size: 500,
      lat: -23.2530996,
      lng: -45.898194100000005
    }, 
    {
      id: 1,
      title: 'Uma casa muito doida',
      picture: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      address: 'Aquarius',
      price: '1.000.000,00',
      bedroom: 5,
      bathroom: 5,
      garage: 4,
      size: 1300,
      lat: -23.219373,
      lng: -45.907630
    },
    {
      id: 2,
      title: 'Uma casa muito doida',
      picture: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      address: 'Aquarius',
      price: '1.000.000,00',
      bedroom: 5,
      bathroom: 5,
      garage: 4,
      size: 1300,
      lat: -23.219373,
      lng: -45.907630
    },
    {
      id: 3,
      title: 'Uma casa muito doida',
      picture: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      address: 'Aquarius',
      price: '1.000.000,00',
      bedroom: 5,
      bathroom: 5,
      garage: 4,
      size: 1300,
      lat: -23.219373,
      lng: -45.907630
    },
    {
      id: 4,
      title: 'Uma casa muito doida',
      picture: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      address: 'Aquarius',
      price: '1.000.000,00',
      bedroom: 5,
      bathroom: 5,
      garage: 4,
      size: 1300,
      lat: -23.219373,
      lng: -45.907630
    },
    {
      id: 5,
      title: 'Uma casa muito doida',
      picture: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      address: 'Aquarius',
      price: '1.000.000,00',
      bedroom: 5,
      bathroom: 5,
      garage: 4,
      size: 1300,
      lat: -23.219373,
      lng: -45.907630
    },
  ],
    user: req.session.user 
  })
})

routes.post('/auth', (req, res) => {
  console.log(req.body)
  return res.status(200).json({ ok: 'failed' })
})

routes.get('/perfil/:url', UserController.getById)

module.exports = routes;