const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})
//Using timestamp it will add 2 fields in DB createdAt, updatedAt
const UserModel= mongoose.model('UserModel',userSchema);
module.exports= UserModel;