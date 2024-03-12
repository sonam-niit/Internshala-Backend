const UserModel= require('../models/user.model');
const express = require('express');
const bcrypt= require('bcrypt');

const router= express.Router(); //creating express Router
router.post('/register',async(req,res)=>{

    const {name,email,username,password}=req.body;
    if(!name || !email || !username || !password){
        return res.status(403).send({message:"All Fields are mandatory"})
    }
    let user=await UserModel.findOne({email});
    if(user){
        return res.status(403).send({message:"EmailId is already registered"})
    }
    user=await UserModel.findOne({username});
    if(user){
        return res.status(403).send({message:"Username is already taken, try with another"})
    }
    const hashPWd= await bcrypt.hash(password,10);
    const newUser=new UserModel({name,email,username,password:hashPWd});
    const resp =await newUser.save();
    return res.status(201).send({message:"User Registered Successfully"})
})
router.post('/login',async(req,res)=>{

})

module.exports=router;