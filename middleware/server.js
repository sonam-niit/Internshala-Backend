const express= require('express');
const myMiddleware1 = require('./middlewares/myMiddleware1');
const isAdmin = require('./middlewares/isAdmin');
const { erroMiddleware, errorMiddleware2 } = require('./middlewares/errorhandler');

const app= express();
app.use(express.json());
app.use(myMiddleware1);//this is applicable to all your endpoins
app.post('/adminDashboard',isAdmin,(req,res)=>{
    res.send('Hello From Admin Dashboard')
})
//isAdmin is Applicable to only /admin endpoint
app.get('/profile',(req,res)=>{
    console.log('Hello From Profile');
})

app.use(erroMiddleware);//if any unexpected error comes then it will be handled by this hanler
app.use(errorMiddleware2);
app.listen(5000,()=>{
    console.log("Server started");
})