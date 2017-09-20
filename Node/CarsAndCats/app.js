// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if(request.url === '/cars') {
        fs.readFile('cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if(request.url === '/cars/new') {
        fs.readFile('cars_new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if(request.url === '/cats') {
        fs.readFile('cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if (request.url === "/css/style.css") {
        fs.readFile('css/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    // Images
    } else if (request.url === "/img/fat_cat.jpg") {
        fs.readFile('img/fat_cat.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents); 
            response.end();
        });
    } else if (request.url === "/img/grumpy_cat.jpg") {
        fs.readFile('img/grumpy_cat.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents); 
            response.end();
        });
    } else if (request.url === "/img/scaredy_cat.jpg") {
        fs.readFile('img/scaredy_cat.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents); 
            response.end();
        });
    } else if (request.url === "/img/fatguy_car.jpg") {
        fs.readFile('img/fatguy_car.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents); 
            response.end();
        });
    } else if (request.url === "/img/banana_car.jpg") {
        fs.readFile('img/banana_car.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents); 
            response.end();
        });
    } else if (request.url === "/img/gtr_drifting.jpg") {
        fs.readFile('img/gtr_drifting.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents); 
            response.end();
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");