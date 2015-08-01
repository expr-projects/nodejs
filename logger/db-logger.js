var winston = require('winston');
var DBLogger = require('../models/minions').DBLogger;
exports.logInDB = function(loggingData){
	var logEntry = new DBLogger(
	{
		logTime : loggingData.logTime,
		token : loggingData.token,
		transactionType : loggingData.transactionType,
		expiryDate :loggingData.expiryDate
	}
	);
	console.log(logEntry);
	logEntry.save(function (err) {
				if (err){
					console.log(err);
				}
	});
}
