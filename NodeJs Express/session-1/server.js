const express= require('express');

const app= express(); //created express server

app.get('/user',(req,res)=>{
    res.status(200).send("User API called")
})
app.get('/product',(req,res)=>{
    res.status(200).send("Product API called")
})
app.get('/admin',(req,res)=>{
    res.status(200).send("Admin API called")
})
app.post("/user",(req,res)=>{
    res.status(201).send("Post User Called")
})

app.listen(5000,()=>{
    console.log("Server started");
})