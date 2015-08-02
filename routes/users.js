var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserLists = require('../models/minions').userList;
var a={};
a=UserLists.find().exec(function(req ,rep,next){});;
router.get('/', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
      response.send(JSON.stringify(a));
  });

module.exports = router;
