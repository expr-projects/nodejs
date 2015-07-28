var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('staffDetails.json', 'utf8'));
router.get('/', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
      response.send(JSON.stringify(obj));
  //response.render('layout');
});

module.exports = router;
