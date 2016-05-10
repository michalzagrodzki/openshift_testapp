const express = require('express'),
      path    = require('path'),
      env     = process.env;

var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
});

// IMPORTANT: Your application HAS to respond to GET /health with status 200
//            for OpenShift health monitoring

app.get('/health', function (req, res) {
  res.writeHead(200);
  res.end();
});

app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
