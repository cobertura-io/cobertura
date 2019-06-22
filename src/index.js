const path = require('path')
const redis = require('redis');
const express = require('express')
const hbs = require('express-handlebars')
const session = require('express-session')

// Configurações Redis
const redisClient = redis.createClient();
const redisStore = require('connect-redis')(session);

const app = express()

redisClient.on('error', (err) => {
  console.log('Redis error: ', err);
});

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views/pages'))
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: path.join(__dirname, 'views/layout/'),
  partialsDir: path.join(__dirname, 'views/partials/')
}))
/*
app.use(session({
  secret: '63c363900743460b3cf1eb09ce4fbf18',
  name: 'sessionCobertura',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: new redisStore({ host: 'localhost', port: 6379, client: redisClient, ttl: 86400 }),
}));
*/
app.use(express.static('public'))
app.use(require('./routes'));

app.listen(8080, () => 
  console.log('Servidor iniciado com sucesso na porta 8080')
)

