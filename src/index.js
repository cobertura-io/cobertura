const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views/pages'))
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: path.join(__dirname, 'views/layout/'),
  partialsDir: path.join(__dirname, 'views/partials/')
}))

app.use(require('./routes'));
app.use(express.static('public'))

app.listen(8080, () => 
  console.log('Servidor iniciado com sucesso na porta 8080')
)