const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require('path');
const myPort = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({secret: 'codingdojorocks', numVisits: 0}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// var numVisits = 0;  // Counter for numVisits to site

app.get('/', function(req, resp) {
    numVisits++;
    resp.send("<h1>Counter</h1>\n\n<h3>" + numVisits + " times</h3>");
});

app.get('/users', function(req, resp){
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"},
    ];
    resp.render('users', {users: users_array});
});

app.get('/users/:id', function(req, res){
    console.log("The user id requested is: ", req.params.id);

    res.send("You requested the user with id: " + req.params.id);
});

app.post('/users', function(req, res){
    req.session.name = req.body.name;
    console.log("Session Name: ", req.session.name);
    console.log("POST DATA \n\n", req.body);

    res.redirect('/');
});

app.listen(myPort, () => {
    console.log("listening on port ${myPort}..");
});