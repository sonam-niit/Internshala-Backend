const bcrypt= require('bcrypt');
const UserModel= require('../model/user.model'); //Import Model here

const getAllUsers =async (req, res) => {

    try {
        const users=await UserModel.find(); //find all users
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        return res.send({message:"error occured while fetching users",error})
    }
}
const getUserById =async (req, res) => {

    try {
        const id= req.params.id;
        const user= await UserModel.findOne({_id:id});
        res.status(200).send({message:"User Found",user})
    } catch (error) {
        console.log(error);
        return res.send({message:"error occured while fetching user",error})
    }
}
const createNewUser =async (req, res) => {
    const {name,username,email,password}=req.body;
    if(!name || !username || !email || !password){
        return res.status(400).send({message:"All fields are Mandatory"});
    }
    try {
        const hashpass= await bcrypt.hash(password,12);
        const newUser= new UserModel({name,username,email,password:hashpass});
        const resp= await newUser.save();
        return res.send({message:"User created",resp})
    } catch (error) {
        console.log(error);
        return res.send({message:"error occured while creating user",error})
    }
}
const UpdateUserById = async(req, res) => {
    const id= req.params.id;
    const {name,password}=req.body
    try {
        const user= await UserModel.findOne({_id:id});
        if(!user){
            return res.send({message:"No User found to Update"})
        }
        user.name=name;
        user.password=await bcrypt.hash(password,12);
        await UserModel.findByIdAndUpdate(id,user);
        return res.status(200).send({message:"User Updated Successfully"});
    } catch (error) {
        console.log(error);
        return res.send({message:"error occured while creating user",error})
    }
}
const deleteUserById =async (req, res) => {

    const id= req.params.id;
    try {
        const user= await UserModel.findOne({_id:id});
        if(!user){
            return res.send({message:"No User found to delete"})
        }
        await UserModel.findByIdAndDelete(id);
        return res.status(200).send({message:"User deleted Successfully"});
    } catch (error) {
        console.log(error);
        return res.send({message:"error occured while deleting user",error})
    }
}

module.exports={
    getAllUsers,
    getUserById,
    UpdateUserById,
    deleteUserById,
    createNewUser
}