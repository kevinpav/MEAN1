// Type 'npm install'
// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
var session = require("express-session");
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'oyvey', numVisits: 0}));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
    if (req.session.numVisits){
        req.session.numVisits++;
    } else {
        req.session.numVisits = 1;
    }
    console.log("numVisits= ", req.session.numVisits);
    res.render("index", {numVisits: req.session.numVisits});
})
// post route for adding a user
app.post('/process', function(req, res) {
//  console.log("POST DATA", req.body);
 // Just add +1 because the numVisits will already be incremented +1 in '/'
 req.session.numVisits++;
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/');
})
app.post('/reset', function(req, res) {
    // console.log("POST DATA", req.body);
    // Just add +1 because the numVisits will already be incremented +1 in '/'
    req.session.numVisits=0;
    // This is where we would add the user to the database
    // Then redirect to the root route
    res.redirect('/');
   })
   // tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});