var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var request = require("request");

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

var options = {
  method: 'GET',
  url: 'https://api.spotify.com/v1/search',
  qs: { q: 'tania bowra', type: 'artist' },
  headers: {
    'postman-token': 'f2363630-62c2-c3a4-aa6b-578d8da7aeb5',
    'cache-control': 'no-cache',
    authorization: 'Bearer BQCRW7PfM9R1h0TyB2HeeNKLKiGubRM6osif_fLCMHVG7pmsmvbZrCWcyPoJROooIOCFJCThoHCns0KSubgviBJK0ICWrUT0Y0nE7u_TdSngpLeBupnZDoiD9mP5Xh3_8ncpodOsH3C2bkcCah47ZtNziYJAzfN8hiicXWO4ru0nDwCEcXkHUnZaapVd5ezZ5JWp'
  }
};

app.get('/items', function (req, res) {
  items.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


app.listen(3000, function () {
  console.log('listening on port 3000!');
});

