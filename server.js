var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./routes');

var app = express();

app.set('view engine', 'jade');
app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(express.static('public'));

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port: ' + app.get('port'));
});
