import mongoose from "mongoose";
import { date } from "zod";

const imageSchema = new mongoose.Schema({
    url:{
        type: String,
        required:true
    },
    format:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    date : {
        type:Date,
        default: Date.now,
    },
    publicID:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
},
{
    timestamps:true
});

export default mongoose.model("Image", imageSchema);