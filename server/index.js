const express = require('express')
const consola = require('consola')
const compression = require('compression')
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser')
const winston = require('winston')
const cookieParser = require('cookie-parser')
// Import route files
const categoryRoutes = require('./routes/categoryRoutes')
const fasciaRoutes = require('./routes/fasciaRoutes')
const templateRoutes = require('./routes/templateRoutes')

const { Nuxt, Builder } = require('nuxt')
const app = express()
// Middlewares neccesary to parse income bodies and headers
app.use(bodyParser.json({ type: '*/*', limit: '20mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(compression());

app.use(cookieParser());
// Connect to mongodb 
mongoose.connect('mongodb+srv://soulsako:oracledc55@email-builder-nuxt-k9n88.mongodb.net/email-builder-v3', {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', () => {
  winston.error('Error in the Database Connection!');
});
db.once('open', () => {
  winston.info('Connection Successful!');
});

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});
// All Routes 
app.use('/api/categories', categoryRoutes);
app.use('/api/fascias', fasciaRoutes);
app.use('/api/templates', templateRoutes);
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

