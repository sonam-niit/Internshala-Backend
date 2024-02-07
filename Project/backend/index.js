const express= require('express');
const mongoose= require('mongoose');
const {searchProduct, filterProduct } = require('./controllers/product.controller');
const dotenv= require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected"))
.catch(err=>console.log(err))

const app= express();
app.use(express.json())

app.use('/api/product',require('./routes/product.route'))
app.get('/api/searchproduct',searchProduct)
app.get('/api/filterproduct',filterProduct)

app.listen(process.env.PORT,()=>{
    console.log("Server Started");
})
