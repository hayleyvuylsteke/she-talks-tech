//adding requirements
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const path = require('path');
const helpers = require('./utils/helpers');

//handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });


const app = express();
const PORT = process.env.PORT || 3013;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//session code
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Bird is the word',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});