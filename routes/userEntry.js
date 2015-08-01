var User = require('../models/minions').User;
var fs = require('fs');
var async = require('async');
var express = require('express');
var router = express.Router();
module.exports= function(req, res, next){
var obj = JSON.parse(fs.readFileSync('staffDetails.json', 'utf8'));

async.each(obj, function(employee,callback){

		var userEntry = new User ({
			emailID : employee.emailID.toLowerCase(),
			passWord : 'Tesco123',
      firstName : employee.firstName.toLowerCase(),
			lastName : employee.lastName.toLowerCase()
		});

		userEntry.save(function (err) {
				if (err){
					console.log(err);
				}
		  else{
				res.send('successfully updated the enteries');
			}
		});

});


}
