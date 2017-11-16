// Type 'npm install'
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
// var session = require("express-session");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
// app.use(session({secret: 'oyvey', numVisits: 0}));

// Views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

// Routes
var route = require('./routes/index.js')(app, server);
