const ProductModel= require('../models/Product');

const addproduct=async (req,res)=>{

    try {
        const {name,price}= req.body;
        const picture= req.file.path;

        const newProduct=new ProductModel({name,price,picture});
        await newProduct.save();

        res.status(201).json({message:"ProductAdded"})
    } catch (error) {
        console.log(error);
    }
    
}

module.exports={addproduct}