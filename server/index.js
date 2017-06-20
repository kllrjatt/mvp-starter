// add promise, body parser ,db as music , react if needed 
var express = require('express');
var bodyParser = require('body-parser');
var Promise = require('bluebird');
var Artist = require('../database-mongo/index.js');
var react = require('react');

var request = require("request");
var rp = require('request-promise');

// promisfy Artist create and Artist find -- Artist is db 
// Promise.promisify(Artist.create);
// Promise.promisify(Artist.find);

// start app 
var app = express();
//use body parser on the server 
app.use(bodyParser.json());
// server static files
app.use(express.static(__dirname + '/../react-client/dist'));

// app . listen for server route 
app.listen(3000, function () {
  console.log('listening on port 3000!');
});

// write get and post route for the api calls

// search the data base for the top 25 artists, 
app.get('/artist', (request, response) => {
  // find all Artist , limited to  the top artist, sorted by number of followers and execute the search 
  Artist.find({}).limit(1).sort({ followers: -1 }).exec()
    // then with the results, send a response code of 200 and send result
    .then((result) => {
      response
        .status(200)
        .send(result)
    })
    // if there is a error, console .log the error 
    .catch((error) => {
      console.log('there is a issue', error)
    })
})

app.post('/artist', (request, response) => {
  // add static options 
  var searchTerm = request.body.artist
  // update search token every hour - need post request to do get request -- future use case 
  var artistOptions = {
    method: 'GET',
    url: 'https://api.spotify.com/v1/search',
    qs: { q: `${searchTerm}`, type: 'artist', limit: '1' },
    headers:
    {
      'postman-token': '4b11e797-b9b5-c5fd-ed06-6544c6c009b9',
      'cache-control': 'no-cache',
      authorization: 'Bearer BQCrMKFTs2h-K-TWZkFwjN9Z-DPB4pB0sDhbGRbaXAt636io1IZZoVy2gTeKa10Y-1mawfjYrv4c8TsuCZnS5NXZqsR61IGkD5yEvPRmcPD1YxWRKLno9HuTdxAWKw8GzVFTCGiDFE5C-NSZvvh5gdJArWh7P_AeDQ-WaAs7FtF0E4wD4Xbw-y1uRos98MYYEGLa',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    },
    formData:
    {
      grant_type: 'refresh_token',
      refresh_token: '{{refresh_token}}'
    }
  };

  rp(artistOptions)
    .then((artist) => {
      response.write('[' + JSON.stringify(artist) +',')
      return artist
    })
    .then((artistID) => {
      var searchTerm = JSON.parse(artistID).artists.items[0].id

      // update search token every hour - need post request to do get request -- future use case 
      var musicOptions = {
        method: 'GET',
        url: 'https://api.spotify.com/v1/artists/' + searchTerm + '/top-tracks',
        qs: { country: 'US' },
        headers:
        {
          'postman-token': '1854da4a-c09e-b61f-9d88-6bd0cd410187',
          'cache-control': 'no-cache',
          authorization: 'Bearer BQCrMKFTs2h-K-TWZkFwjN9Z-DPB4pB0sDhbGRbaXAt636io1IZZoVy2gTeKa10Y-1mawfjYrv4c8TsuCZnS5NXZqsR61IGkD5yEvPRmcPD1YxWRKLno9HuTdxAWKw8GzVFTCGiDFE5C-NSZvvh5gdJArWh7P_AeDQ-WaAs7FtF0E4wD4Xbw-y1uRos98MYYEGLa',
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
        },
        formData:
        {
          grant_type: 'refresh_token',
          refresh_token: '{{refresh_token}}'
        }
      };

      rp(musicOptions)
        .then((music) => {
          console.log(music)
          response.write(JSON.stringify(music) +']')
          response.end()
        })

    })

})


