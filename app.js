var http = require('http');
var express = require('express');
var routes = require('./routes/index');
var path = require('path');
mongoose = require('mongoose');
var favicon = require('serve-favicon');
//var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var app = express();
var uristring =
  process.env.MONGOLAB_URI ||"mongodb://heroku_vgxwdkrp:ivoo85oisvap6sc46uodke2mg3@ds027483.mongolab.com:27483/heroku_vgxwdkrp"||
  process.env.MONGOHQ_URL;

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(multer());
app.get('/',routes);
app.use(express.static(path.join(__dirname, 'public')));


//error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
