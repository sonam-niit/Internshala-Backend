const UserModel= require('../models/user_model');

const addUser=async (req,res)=>{
    try {
        const {name,email,username,password}=req.body;
        if(!name || !email || !username || !password){
            return res.status(400).send({message:"All the fields are mandatory"})
        }
        let user=await UserModel.findOne({email});
        if(user){
            return res.send({message:"email is already registered"})
        }
        user=await UserModel.findOne({username});
        if(user){
            return res.send({message:"UserName is already registered"})
        }
        const newUser= new UserModel({name,email,username,password});
        const resp= await newUser.save();
        res.status(201).send({message:"User Created",resp})
    } catch (error) {
        console.log(error);
    }
}
const getAllUsers=async (req,res)=>{
    try {
        const resp= await UserModel.find();
        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send({message:"Error Occured",error})
    }
}
const getUserById=async (req,res)=>{
    try {
        const {id}=req.params;
        const resp=await UserModel.findById(id);
        if(!resp){
            return res.status(404).send({message:"No User Found"})
        }
        res.status(200).send({message:"User Found",resp})
    } catch (error) {
        res.status(500).send({message:"Error Occured",error})
    }
}
const updateUser=async (req,res)=>{
    const {id}= req.params;
    try {
        // const {name,username,password}=req.body;
        
        let user=await UserModel.findById(id);
        if(!user){
            return res.send({message:"No User registered to update"})
        }
        const resp=await UserModel.findByIdAndUpdate(id,req.body);

        res.status(201).send({message:"User Updated",resp})
    } catch (error) {
        console.log(error);
    }
}
const deleteUser=async (req,res)=>{
    try {
        const {id}=req.params;
        const resp=await UserModel.findByIdAndDelete(id);
        if(resp==null){
            return res.status(404).send({message:"No User Found to Delete"})
        }
        return res.status(200).send({message:"User Deleted Successfully"})
    } catch (error) {
        res.status(500).send({message:"Error Occured",error})
    }
}

module.exports={
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}