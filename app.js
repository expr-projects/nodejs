
var express = require('express')
    , http = require('http')
//    ,morgan = require('morgan')
    ,mongoose = require('mongoose')
    ,favicon = require('serve-favicon')
    ,methodOverride = require('method-override')
    ,session = require('express-session')
    ,bodyParser = require('body-parser')
    ,multer = require('multer')
    ,errorHandler = require('errorhandler')
    ,path = require('path');
//****************************routes**************************************
var index = require('./routes/index');
var userEntry = require('./routes/userEntry');
var users = require('./routes/users');

var app = express();


/*************************db connection***********************************************/
var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/trendingdb';

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

// all environments
/*****************************app configuration*************************************/

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(morgan('combined'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(methodOverride());
app.use(session({ resave: true, saveUninitialized: true,secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
/******************************routes configuration****************************************/
app.get('/',index)
app.use('/users',users);
app.post('/userEntry', userEntry);

//error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
}
/*******************************server creation******************************************/
var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
