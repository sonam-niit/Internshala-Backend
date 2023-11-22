//import express
const express= require('express');
//create server

const app= express();
//Parser to read data coming from Request object 
app.use(express.json())

//create multiple path for request
app.get("/user",(req,res)=>{
    res.status(200).send("<h1>Get All Users</h1>")
})
app.post("/user",(req,res)=>{
    console.log(req.body);
    res.status(201).send("<h1>Created User Successfully</h1>")
})
app.get("/user/:id",(req,res)=>{
    const id= req.params.id;
    res.status(200).send(`<h1>User Found ${id}</h1>`)
})
app.put("/user/:id",(req,res)=>{
    const id= req.params.id;
    res.status(200).send(`<h1>User updated ${id}</h1>`)
})
app.delete("/user/:id",(req,res)=>{
    const id= req.params.id;
    res.status(200).send(`<h1>User Deleted ${id}</h1>`)
})

//start server
app.listen(5000,()=>{
    console.log("Server Started");
})