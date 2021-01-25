var http = require("http")

http.createServer(function(request, response){
    //gives you the complete url with parameters
    var url = request.url

    //http header
    //Content type: text/plain
    response.writeHead(200, {'Content-Type':'text/plain'});
    //Send response to body
    response.end('URL Requested\n' + url)
}).listen(3000);

console.log('Server running at http://localost:3000');