var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

  var loggingSchema = new Schema({
      logTime          : { type: Date, required: true, default : Date.now()}
    , token 			 : { type: String, required: true, index: { unique: true }}
    , transactionType  : { type: String}
    , expiryDate       : { type: String}
  });
  var userList = new Schema({
      emailID      	  : { type: String, required: true}
    , passWord   		  : { type: String, required: true }
    , firstName			  : { type: String}
    , lastName        : { type: String}
  });

  var userList = mongoose.model('userList', userList);
  var dbLogger = mongoose.model('dbLogger', loggingSchema);
module.exports = {
  userList :userList,
  DBLogger : dbLogger

};
