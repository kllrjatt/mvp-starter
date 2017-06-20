var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

var artistSchema = mongoose.Schema({
  // add mongoose fields here
});

var Artist = mongoose.model('Artist', artistSchema);


module.exports = Artist;