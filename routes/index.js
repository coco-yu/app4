var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(path.join(__dirname,'/views/header.html'), { title: 'Express' });
  res.send('wonderful');
});

module.exports = router;
