const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())
app.use(express.static('public'))
app.use(require('./routes'));

app.get('/', (req, res) => (
  res.render('home')
))

app.listen(8080, () => console.log('Servidor iniciado com sucesso na porta 8080'))