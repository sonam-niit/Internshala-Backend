//import express
const express= require('express');
const storage=require('node-persist');

//intialize storage
storage.init()
//create server

const app= express();
//Parser to read data coming from Request object 
app.use(express.json())

//create multiple path for request
app.get("/user",(req,res)=>{
     storage.values()
     .then((users)=>res.status(200).send(users))
     .catch((err)=>res.status(400).send(err))
       
})
// app.get("/user",async(req,res)=>{
//     try {
//         const users=await storage.values();
//         res.status(200).send(users);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// })
app.post("/user",(req,res)=>{
    const {id,name,age}=req.body;
    storage.setItem(id,req.body);//key= id and full object is  value
    res.status(201).send("<h1>Created User Successfully</h1>")
})
app.get("/user/:id",(req,res)=>{
    const id= req.params.id;
    res.status(200).send(`<h1>User Found ${id}</h1>`)
})
app.put("/user/:id",(req,res)=>{
    const {id}= req.params;
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