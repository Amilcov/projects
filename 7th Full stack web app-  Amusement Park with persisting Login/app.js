
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { sessionSecret } = require('./config');
const session = require('express-session');

const { environment } = require('./config');

const { restoreUser } = require('./auth');
const userRoutes = require('./routes/user');
const indexRoutes = require('./routes');
const parkRoutes = require('./routes/park');
const attractionRoutes = require('./routes/attraction');
const visitRoutes = require('./routes/visit');


const app = express();

app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(cookieParser(sessionSecret));

app.use(session({
  name: 'amusement_park_tracker_with_users.sid',
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false
}));

app.use(express.urlencoded({ extended: false }));

app.use(restoreUser);

app.use(userRoutes);
app.use(indexRoutes);
app.use(parkRoutes);
app.use(attractionRoutes);
app.use(visitRoutes);


// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
  const err = new Error('The requested page couldn\'t be found.');
  err.status = 404;
  next(err);
});

// Custom error handlers.

// Error handler to log errors.
app.use((err, req, res, next) => {
  if (environment === 'production' || environment === 'test') {
    // TODO Log the error to the database.
  } else {
    console.error(err);
  }
  next(err);
});

// Error handler for 404 errors.
app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404);
    res.render('page-not-found', {
      title: 'Page Not Found',
    });
  } else {
    next(err);
  }
});

// Generic error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === 'production';
  res.render('error', {
    title: 'Server Error',
    message: isProduction ? null : err.message,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;