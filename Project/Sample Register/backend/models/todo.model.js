const mongoose= require('mongoose');
const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})

const todo= mongoose.model('todo',todoSchema);
module.exports=todo;