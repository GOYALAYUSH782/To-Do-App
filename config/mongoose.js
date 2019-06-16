//acquiring mongoose
var mongoose = require('mongoose');

//connecting to mongoose
mongoose.connect('mongodb://localhost/codeial_development');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

db.once('open', function() {
  console.log('connected to the database:: MongoDB')
});

// exporting the databse
module.exports=db;