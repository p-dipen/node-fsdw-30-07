// Loading the required modules
// Express a websever
require('dotenv').config();
const express = require('express');
const app = express();
const mypublicRouter = require('./routes/mypublic');
const myprivateRouter = require('./routes/myprivate');

// console.log(process.env);
// Allow environemnt port variable default to 3000
app.set('port', process.env.PORT || 3000);
/// this is banking application will you able to provide your credit card information on github or any where
// on public service ?
// How can pass the variables are required for process ?
// Environmental variables - process.env / process.args

app.set('view engine', 'ejs');
app.set('views', './views_pages');

// Set some global variables in express
app.locals.siteTitle = 'Nodejs app';

app.use(mypublicRouter);
app.use('/private', myprivateRouter);

// Setup server to start listening

var server = app.listen(app.get('port'), function () {
  console.log('Listening on port' + app.get('port'));
});

module.exports = server;
