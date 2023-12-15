const mysql= require('mysql');

const conn=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'sample'
});

conn.getConnection((err,connection)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log("connected..!!",connection);
    }
})

