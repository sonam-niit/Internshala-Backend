const express= require('express');
const mongoose= require('mongoose');
require('dotenv').config();
const cors= require('cors');

const app= express(); //creating express server
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('DB Connected'))
.catch((err)=>console.log('Error',err))

app.use('/api/auth',require('./routes/user.routes'));

app.listen(process.env.PORT,()=>{
    console.log(`Server started on PORT ${process.env.PORT}`);
})