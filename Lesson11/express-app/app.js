// Loading the required modules
// Express a websever
require('dotenv').config();
const express = require('express');
const app = express();

const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const createError = require('http-errors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// console.log(process.env);
// Allow environemnt port variable default to 3000
app.set('port', process.env.PORT || 3000);
/// this is banking application will you able to provide your credit card information on github or any where
// on public service ?
// How can pass the variables are required for process ?
// Environmental variables - process.env / process.args

// view engine setup
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views_pages'));

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set some global variables in express
app.locals.siteTitle = 'Nodejs app';

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing the error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Setup server to start listening

var server = app.listen(app.get('port'), function () {
  console.log('Listening on port' + app.get('port'));
});

module.exports = server;
