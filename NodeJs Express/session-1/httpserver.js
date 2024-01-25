const http= require('http');

//Created the server with name server
const server= http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Hello EveryOne</h1>");
    res.end();
})

//start server

server.listen(5000,()=>{
    console.log("Server Started on PORT 5000");
})