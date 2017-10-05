module.exports = function Route(app){
    // root route
    app.get('/', function(req, res) {
        res.render("index");
    });
    // post route for survey result
    app.post('/result', function(req, res) {
        // console.log("POST DATA", req.body);
        submitted_info = {
                name: req.body.name,
                location: req.body.location,
                favelang: req.body.favelang,
                comments: req.body.comments,
        }
        res.render("results", {user_data: submitted_info});
    });
};