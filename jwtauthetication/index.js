const cors= require('cors');
const express= require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');

dotenv.config();
const app= express();
app.use(cors());//to connect with Frontend
app.use(express.json());//middleware for JSON Parser

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected"))
.catch(err=>console.log("Error while connecting",err))

const auth_controller=require('./routes/auth_routes');

app.use('/api/auth',auth_controller);
app.use('/api/user',require('./routes/user_routes'));
app.use('/api/product',require('./routes/product_routes'));

app.listen(process.env.PORT,()=>{
    console.log(`Server is listing on PORT: ${process.env.PORT}`);
})