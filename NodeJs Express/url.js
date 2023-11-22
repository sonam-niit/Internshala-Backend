const url= require('url');

const link="http://www.example.com:3000/products/index.html";

const myurl= url.parse(link);
console.log(myurl.host);
console.log(myurl.hostname);
console.log(myurl.port);
console.log(myurl.protocol);
console.log(myurl.pathname);