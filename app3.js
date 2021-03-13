const http = require('http')
Var fs = require('fs')
Function serveStaticFile(messegeType, path, contentType, responseCode) {
    If (!responseCode) responseCode = 200;
    Fs.readFile(__dirname + path, function(err, data) {
        If (err) {
            messegeType.writeHead(500, {"Content-Type":"text/plain"})
            messegeType.end("500 – Internal error")
        }
        Else{
            messegeType.writeHead(responseCode, {"Content-Type":contentType})
            messegeType.end(data)
http.crateServer(function(req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch(path) {
        case "":
            serveStaticFile(res, "/index.html", "text/html")
            break;
        case "/about":
            serveStaticFile(res, "/about.html", "text/html")
            break;
        case "/img/logo":
            serveStaticFile(res, "/img/logo.jpg", "image/jpeg")
            break;
        default:
            serveStaticFile(res, "/error.html", "text/html", 404)
            break;
    }
}).listen(3000)
Console.log(«The server is running on localhost:3000. Press CTRL+C to terminate…»)
