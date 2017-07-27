const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  mongoose.connect(uri);
  // plug in the promise library:
  mongoose.Promise = global.Promise;

  if (process.env.MONGODB_URI) {
 mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });
  }
  //
  // let db = mongoose.connection;
  //
  // //Handle Database(mongoose) errors
  // db.on('error', (error) => console.log('Mongoose Error:', error));
  //
  // //If successfully connected to db through mongoose say so!
  // db.on('open', () => console.log('Mongoose connection has been successful!'));




  // load models
  require('./user');
};

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
