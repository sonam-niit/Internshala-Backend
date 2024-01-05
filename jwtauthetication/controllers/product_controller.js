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
const getAllProducts=async (req,res)=>{
    try {
        const data= await ProductModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Internal Error Occured"})
    }
}
const getProductById=async (req,res)=>{
    try {
        const data= await ProductModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Internal Error Occured"})
    }
}
module.exports={addproduct,getAllProducts,getProductById}