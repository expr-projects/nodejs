var User = require('../models/minions').User;
var fs = require('fs');
var async = require('async');
module.exports= function(req, res, next){
var obj = JSON.parse(fs.readFileSync('staffDetails.json', 'utf8'));

async.each(obj, function(employee,callback){
	if(employee.tpxID){
		var userEntry = new User ({
			tpxID : employee.tpxID.toUpperCase(),
			passWord : 'Tesco123'

		});

		userEntry.save(function (err) {
				if (err){
					console.log(err);
				}
		});
	}
});
}
