var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(req, res, next) {
  var navUrl = {
    'url1': 'Home',
    'url2': 'Archives',
    'url3': 'About',
    'url4': '友链'
  };
  var title = 'coco';
  var data = JSON.stringify(navUrl);
  res.render(path.join(__dirname, '../views/header.html'), {data: data});
});

module.exports = app;

