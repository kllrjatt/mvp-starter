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

});

// var trackSchema = mongoose.Schema({

// });

var Artist = mongoose.model('Artist', artistSchema);

// var Track = mongoose.model('Track', trackSchema);


module.exports = Artist;

// module.exports = Track;