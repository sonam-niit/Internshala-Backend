//import express
const express= require('express');
const storage=require('node-persist');
const cors= require('cors');

//intialize storage
storage.init()
//create server

const app= express();
app.use(cors())
//Parser to read data coming from Request object 
app.use(express.json())

//create multiple path for request
// app.get("/user",(req,res)=>{
//      storage.values()
//      .then((users)=>res.status(200).send(users))
//      .catch((err)=>res.status(400).send(err))
       
// })
app.get("/user",async(req,res)=>{
    try {
        const users=await storage.values();
        console.log(users);
        res.status(200).send(users);
    //    const data='';
    //    for(let u of users){
    //     data+=`<h2>Id: ${u.id}</h2>
    //             <h4>Name: ${u.name}</h4>
    //             <h4>Age: ${u.age}</h4>
    //     `
    //    }
    //    res.status(200).send(data);
       //to send the data inthe form of HTML
       
    } catch (error) {
        res.status(400).send(error);
    }
})
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