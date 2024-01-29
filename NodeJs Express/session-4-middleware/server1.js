const express= require('express');
const checkQueryParam = require('./middlewares/middleware');
const app=express();

//Middleware for some loggin requests
app.use((req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}]
     ${req.method} ${req.url}`);
    next();
})

//Route handling
app.get('/login',(req,res)=>{
    res.send("Hello... Express..!!!")
})
app.get('/profile',checkQueryParam,(req,res)=>{
    res.send("You have access of"+ 
    "your profile page "+req.name);
})

//start server
app.listen(5000,()=>{
    console.log("Server started on PORT 5000");
})