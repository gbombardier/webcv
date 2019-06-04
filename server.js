//Require necessary files/package for the server
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var http = require('http').Server(app);
const bodyParser = require('body-parser');

//Different pages
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var projectsRouter = require('./routes/projects');
var resumeRouter = require('./routes/resume');

//Scripts
var utilities = require('./public/javascripts/utils.js');
var jquery = require('./public/javascripts/jQuery.js');

//Setup express and server
var app = express();
var server = app.listen(3000, function() {
    console.log('Ready on port %d', server.address().port);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Apply routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static('public'));
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);
app.use('/resume', resumeRouter);


module.exports = app;
