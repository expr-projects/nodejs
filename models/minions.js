var mongoose = require('mongoose')
  , Schema = mongoose.Schema;


var userSchema = new Schema({
    tpxID          	  : { type: String, required: true, index: { unique: true } }
  , passWord   	  	  : { type: String, required: true }

});
var user = mongoose.model('user', userSchema);
module.exports = {

  User     : user

};
