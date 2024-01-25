const url= require('url');

const myUrl= url.parse("http://www.example.com:6000/amazon/products/index.html?name=sonam&age=45",true);

console.log("Host",myUrl.host);
console.log("HostName:",myUrl.hostname);
console.log("Protocol:",myUrl.protocol);
console.log("Port:",myUrl.port);
console.log("Path:",myUrl.path);
console.log("PathName:",myUrl.pathname);
const query= myUrl.query;
console.log("Name: "+query.name);
console.log("Age: "+query.age);



