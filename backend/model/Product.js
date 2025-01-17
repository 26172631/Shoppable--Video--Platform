const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type:String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
},{timestamps:true})

const Product = new mongoose.model("Product",productSchema)
module.exports = Product