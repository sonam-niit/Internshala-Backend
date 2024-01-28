const express= require('express');
const mysql= require('mysql');
const app= express();
app.use(express.json()); //JSON Parser

const conn= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'estore'
})

conn.connect((err)=>{
    if(err){
        console.log("Error Occured",err);
    }else{
        console.log("Connected with DB");
    }
})

app.get("/customers",(req,res)=>{

    conn.query('select * from customer',(err,data)=>{
        if(err){
            return res.send("Error Occured")
        }
        res.send(data);
    })
})

app.post("/customers",(req,res)=>{

    const {name,email,password}=req.body;
    conn.query('insert into customer (name,email,password) values (?,?,?)',
    [name,email,password],
    (err,data)=>{
        if(err){
            return res.send("Error Occured")
        }
        res.status(201).send("Data Inserted Successfully");
    })
})

app.put("/customers/:id",(req,res)=>{
    const id= req.params.id;
    const {name,password}=req.body;
    conn.query('update customer set name=?,password=? where id=?',
    [name,password,id],
    (err,data)=>{
        if(err){
            return res.send("Error Occured")
        }
        res.status(200).send("Data Updated Successfully");
    })
})

app.delete("/customers/:id",(req,res)=>{
    const id= req.params.id;
    conn.query('delete from customer where id=?',
    [id],
    (err,data)=>{
        if(err){
            return res.send("Error Occured")
        }
        res.status(200).send("Data deleted Successfully");
    })
})

app.listen(5000,()=>{
    console.log("My Server Started");
})