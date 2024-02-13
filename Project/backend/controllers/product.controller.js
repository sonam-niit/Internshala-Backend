const ProductModel= require('../models/product.model');
const cloudinary= require('cloudinary');

const addProduct=async(req,res)=>{
    try {
        const {name,price,description,quantity}= req.body;
        const result=await cloudinary.uploader.upload(req.file.buffer);
        const path= result.secure_url;
        console.log(path);
        // const newProduct= new ProductModel({name,price,description,quantity,picture:path});
        // await newProduct.save();

        res.status(201).json({message:"Product Added"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Some Internal Error Occured"})
    }
}
const getAllProducts=async(req,res)=>{
    try {
        const data= await ProductModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({message:"innternal Error Occured"})
    }
}
const searchProduct=async(req,res)=>{
    const query= req.query.q;
    if(!query){
        return res.status(400).json({error:"Please provide a Search Query"})
    }
    try {
        const data= await ProductModel.find({
            $or:[
                {name:{$regex:query,$options:'i'}},
                {description:{$regex:query,$options:'i'}}
            ]
        });
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({message:"innternal Error Occured"})
    }
}
const getProductById=async(req,res)=>{
    try {
        const data= await ProductModel.findOne({_id:req.params.id});
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({message:"innternal Error Occured"})
    }
}

const filterProduct=async(req,res)=>{
    let filters= req.query;
    console.log(filters);
    let priceRange={};
    if(filters.minPrice!==undefined || filters.maxPrice!==undefined){
        priceRange.$gte=parseInt(filters.minPrice);
        priceRange.$lte=parseInt(filters.maxPrice);
    }
    try {
        let query={}
        if(Object.keys(priceRange).length>0){
            query.price=priceRange;
        }
        console.log(query);
        const results= await ProductModel.find(query);
        res.send(results)
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Error occured"})
    }
}


module.exports={addProduct,getAllProducts,getProductById,
    searchProduct,filterProduct}