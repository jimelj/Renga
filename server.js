/*jshint esversion:6*/
//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
var path = require('path');

const passport = require('passport');
const config = require('./config');

// connect to the database and load models
require('./models').connect(config.dbUri);



//Lets init express and port
const app = express();
let PORT = process.env.PORT || 8080;

//static dir
// app.use(favicon(path.join(__dirname,'public','assets','img','favicon.ico')));
app.use(express.static(process.cwd() + '/public'));

//logger with morgan
app.use(logger('dev'));

//body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);


//setting up routes
const htmlRoutes = require('./controllers/html-routes.js');
const apiRoutes = require('./controllers/api-routes.js');
const authRoutes = require('./controllers/auth.js');
app.use('/auth', authRoutes);
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// // Set mongoose to leverage built in JavaScript ES6 Promises
// mongoose.Promise = Promise;
//
// //Database Config with mongoose
// if (process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect('mongodb://localhost/Renga');
// }
//
// let db = mongoose.connection;
//
// //Handle Database(mongoose) errors
// db.on('error', (error) => console.log('Mongoose Error:', error));
//
// //If successfully connected to db through mongoose say so!
// db.on('open', () => console.log('Mongoose connection has been successful!'));

//Start and litsen on 8080
app.listen(PORT, () => console.log('====🌎 🚈 🖥️ 📡===> App listening on PORT ' + PORT + ' ✅'));
