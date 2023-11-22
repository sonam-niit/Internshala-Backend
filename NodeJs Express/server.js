const http = require('http');
const PORT = 5000;
//created server
const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type':'text/html'})
    if (req.url == '/hello') {
        res.write("<h1>Hello World</h1>");
        res.end();
    }else if (req.url == '/about') {
        res.write("<h1>About Us</h1>");
        res.end();
    }else if (req.url == '/contact') {
        res.write("<h1>Contact Us</h1>");
        res.end();
    }
})
//start the server
server.listen(PORT, () => {
    console.log(`Server listining to PORT ${PORT}`);
})