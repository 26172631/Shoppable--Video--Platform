const Video = require("../model/Video")

  
const getVideoMeta = async(req,res)=>{
    try{
        const metadata = await Video.find().populate("productId");
        return res.json({success:true,message:"Metadata fetched successfully",metadata })
    }catch(err){
        console.log(err)
        return res.json({success:false,message:err.message})
    }
}
const createVideo = async(req,res)=>{
    try{
        const video = await Video.create(req.body)
        return res.json({success:true, message:"Video created successfully"})
    }catch(err){
        return res.json({success:false,message:err.message})
    }
}
module.exports = {getVideoMeta,createVideo}