const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    timestamp:{
        type:String,
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
    position: {
        x: {
            type: String,
            required:true
        },
        y: {
            type: String,
            required:true
        }
    }
},{timestamps:true})

const Video = new mongoose.model("Video",videoSchema)

module.exports = Video;