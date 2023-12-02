const mongoose= require('mongoose');

const Schema= mongoose.Schema;
const userSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

const UserModel= mongoose.model('UserModel',userSchema);
module.exports= UserModel;
