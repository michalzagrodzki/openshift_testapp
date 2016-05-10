var express = require('express');
var app = express();

const fs           = require('fs'),
      path         = require('path'),
      contentTypes = require('./utils/content-types'),
      env          = process.env;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
});

app.get('/health', function (req, res) {
  res.writeHead(200);
  res.end();
});

app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
