var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/minions').User;
var a={};
a=Users.find().exec(function(req ,rep,next){});;
router.get('/', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
      response.send(JSON.stringify(a));
  });

module.exports = router;