const mongoose= require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("DB Connected..."))
.catch((err)=>console.log("Error",err))
