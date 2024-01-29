const express= require('express');
const customMiddleware = require('./middlewares/custom1');
const checkLogin = require('./middlewares/checklogin');
const cors= require('cors');
const morgan= require('morgan');
const app= express();

app.use(express.json());
//Returns middleware that only parses json and only looks at requests where 
//the Content-Type header matches the type option.
app.use(express.urlencoded({extended:true}));
//Returns middleware that only parses urlencoded bodies 
app.use(customMiddleware); //all the request has to pass through this middle ware
//app.use('/profile',checkLogin);//this middleware is applicable only to profile route
app.use(cors()); //Third party Middle ware
app.use(morgan('dev')); //Third party Middle ware
app.get("/user",(req,res)=>{
    res.send("User Path Requested")
})
//here check login is also one middleware
app.get("/profile",checkLogin,(req,res)=>{
    res.send("Profile Path Requested")
})
app.get("/product",(req,res)=>{
    throw new Error("Some error");
    res.send("Product Path Requested")
})
//router middleware
app.use('/api/user',require('./user.route'));

//Error Handling Middleware
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("Something Broke")
})

app.listen(5000,()=>{
    console.log("Server Started");
})