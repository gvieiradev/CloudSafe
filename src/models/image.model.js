import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    url:{
        type: String,
        //required: true,
    },
    name:{
        type:String,
        //required:true,
    },
    type:{
        type:String,
        //required:true,
    },
    description:{
        type:String,
        //required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        //required:true
    }
},{
    timestamps:true
});

export default mongoose.model("Image", imageSchema);