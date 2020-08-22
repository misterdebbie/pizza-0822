// app.js
const express = require('express');
const app = express();
const path = require('path')

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res) => {
  res.render('main');
});

const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.use(session({
  secret: process.env.SESSION_KEY, // session secret
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize()); // Registers the Passport middleware.
app.use(passport.session()); // persistent login sessions


const authRouter = require('./routes/auth-routes');
app.use('/auth', authRouter);

const authHelpers = require('./services/auth/auth-helpers');
//app.use(authHelpers.loginRequired)

const loginRouter = require('./routes/login-routes');
app.use('/login', loginRouter);

const menuRouter = require('./routes/menu-routes');
app.use('/menu', menuRouter)

const specialsRouter = require('./routes/specials-routes');
app.use('/specials', specialsRouter)

const pizzaclubRouter = require('./routes/pizzaclub-routes');
app.use('/pizzaclub', pizzaclubRouter)

const loggedinRouter = require('./routes/loggedin-routes');
app.use('/loggedin', loggedinRouter)


app.listen(PORT, () => {
  console.log(`App is up. Listening on port ${PORT}`);
});
