const Product = require("../model/Product");
const getProductById = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id)
        if(product) {
            return res.json({success:true,message:"Product fetched successfully",product:product})
        }
    }catch(err){
        return res.json({success:false,message:err.message});
    }
}
const createProduct = async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        return res.json({success:true, message:"Product created successfully"})
    }catch(err){
        return res.json({success:false,message:err.message})
    }
}

const getAllProduct = async(req,res)=>{
    try{
        const product = await Product.find();
        return res.json({success:true,message:"Product Fetched Successfully", product})
    }catch(err){
        return res.json({success:false,message:err.message})
    }
}

module.exports = {getProductById,createProduct,getAllProduct}