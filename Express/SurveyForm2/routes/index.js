module.exports = function Route(app, server){
    var io = require('socket.io').listen(server);
    // root route
    app.get('/', function(req, res) {
        res.render("index");
    });
    // Listen to connection from client
    io.sockets.on('connection', function(socket){
        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);
        // Server code here
        socket.on("posting_form", function(data){
            var numRandom = Math.floor((Math.random() * 1000) + 1);
            console.log("Form submitted: " + data);
            socket.emit('updated_message', {response: data});
            socket.emit('random_number', {response: numRandom});
        });
    });
    // // post route for survey result
    // app.post('/result', function(req, res) {
    //     // console.log("POST DATA", req.body);
    //     submitted_info = {
    //             name: req.body.name,
    //             location: req.body.location,
    //             favelang: req.body.favelang,
    //             comments: req.body.comments,
    //     }
    //     res.render("results", {user_data: submitted_info});
    // });
};