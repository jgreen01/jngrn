var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();

var contentPath = path.join(__dirname, 'www');

// Start Web Server

//app.use(favicon(path.join(contentPath, 'favicon.ico')));
app.use(express.static(process.argv[3] || contentPath));

// error handlers

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(process.argv[2] || 8080);

module.exports = app;
