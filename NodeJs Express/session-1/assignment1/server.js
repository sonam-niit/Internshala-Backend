const express= require('express');
const storage= require('node-persist');

//initialize Storage
storage.init();
const app= express();
//JSON Parser
app.use(express.json()); //now I can read data coming from POST in JSON format

app.post("/employee",(req,res)=>{
    const {id,name,designation,salary}=req.body;
    storage.setItem(id,req.body);
    res.status(201).send("Emloyee Saved Successfully")
})
app.get("/employee",async (req,res)=>{
    const emps=await storage.values();
    //res.send(emps);
    let html=`<table><tr><th>Id</th><th>Name</th><th>Designation</th><th>Salary</th><tr>`;
    for(let e of emps){
        html+=`<tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.designation}</td>
                <td>${e.salary}</td>
                <td><a href='/employee/${e.id}'>View</td>
        </tr>`
    }
    res.status(200).send(html);
})
app.get("/employee/:id",async(req,res)=>{
    const id=req.params.id;
    const emp= await storage.getItem(id);
    if(!emp){
        return res.send("No Employee Found");
    }
    return res.send(`<h1>Id:${emp.id}</h1><h2>Name:${emp.name}</h2>
    <h2>Designation:${emp.designation}</h2><h2>Salary:${emp.salary}</h2>`)
})
app.listen(5000,(req,res)=>{
    console.log("Server started");
})