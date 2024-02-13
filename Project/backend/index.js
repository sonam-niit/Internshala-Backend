const express= require('express');
const mongoose= require('mongoose');
const cloudinary= require('cloudinary');
const {searchProduct, filterProduct } = require('./controllers/product.controller');
const dotenv= require('dotenv').config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected"))
.catch(err=>console.log(err))

const app= express();
app.use(express.json());
app.use(require('cors')()); //enabling cors
app.use('/uploads',express.static('uploads'))
app.use('/api/product',require('./routes/product.route'))
app.get('/api/searchproduct',searchProduct)
app.get('/api/filterproduct',filterProduct)

app.listen(process.env.PORT,()=>{
    console.log("Server Started");
})
