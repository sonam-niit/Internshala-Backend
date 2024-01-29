const express= require('express');
const checkLogin = require('./middlewares/checklogin');

const router= express.Router();

router.use(checkLogin); //router specific middleware
router.get("/",(req,res)=>{
    console.log("User Get Request");
    res.send("User Get Request");
})
router.post("/",(req,res)=>{
    console.log("User Post Request");
    res.send("User Post Request");
})
router.get("/:id",(req,res)=>{
    console.log("User Get Request with Id "+req.params.id);
    res.send("User Get Request with Id "+req.params.id);
})
router.delete("/:id",(req,res)=>{
    console.log("User Delete Request with Id "+req.params.id);
    res.send("User Delete Request with Id "+req.params.id);
})
router.put("/:id",(req,res)=>{
    console.log("User Put Request with Id "+req.params.id);
    res.send("User Put Request with Id "+req.params.id);
})

module.exports=router;