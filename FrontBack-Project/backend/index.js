const express = require('express');
const mysql = require('mysql');
const cors= require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'estore'
})
conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connected');
})
app.post('/user',(req,res)=>{
    const {name}=req.body;
    const query= 'insert into user (name) values (?)';
    conn.query(query,[name],(err)=>{
        if(err){
            console.log(err);
        }else{
            res.status(201).send("User Inserted Successfully");
        }
    })
})
app.get("/user",(req,res)=>{
    const query="select * from user";
    conn.query(query,(err,docs)=>{
        if(err){
            res.send(err);
        }else{
            res.status(200).send(docs);
        }
    })
})
app.delete("/user/:id",(req,res)=>{
    const id= req.params.id;
    const query="delete from user where id=?";
    conn.query(query,[id],(err,docs)=>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send({message:"User Deleted Successfully"});
        }
    })
})

app.listen(5000, () => {
    console.log("Server Started");
})