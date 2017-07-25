var express = require('express');
var path = require('path');
var hbs = require('hbs');

var app = express();

app.use(express.static('public'));
var index = require('./routes/index.js');
var header = require('./routes/header.js');

app.set('views', './views');
app.engine('html', hbs.__express);
app.set('view engine', 'html');

app.use('/', index);
app.use('/header', header);

app.listen(3000);
