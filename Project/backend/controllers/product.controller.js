const ProductModel= require('../models/product.model');

const addProduct=async(req,res)=>{
    try {
        const {name,price,description,quantity}= req.body;
        const picture=req.file.path;

        const newProduct= new ProductModel({name,price,description,quantity,picture});
        await newProduct.save();

        res.status(201).json({message:"Product Added"})
    } catch (error) {
        res.status(500).json({message:"Some Internal Error Occured"})
    }

}

module.exports={addProduct}