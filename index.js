const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    const data = fs.readFileSync('myapi.json', "utf-8")
    const objd = JSON.parse(data);
    if (req.url == "/") {
        res.end("heloo this home side");
    } else if (req.url == "/about") {
        res.end("heloo this about side");
    } else if (req.url == "/myapi") {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(objd[1].title);
    } else {
        res.writeHead(400, { 'content-type': 'text/html' });
        res.end("<h1>400 erro page:page does not exist</h1>");
    }



})

server.listen(8000, "127.0.0.1", () => {
    console.log("i am listing your voice");
});