import Image from "../models/image.model.js";
import {uploadImage} from "../cloudinary/cloudinary.js"

export const createImage = async(req,res) =>{
    uploadImage(req.body.image)
        .then((url) =>  res.send(url))
        .catch((err) => res.status(500).send(err));
};

export const saveImage = async(req,res) =>{
    const {url,name,description,type,date} = req.body

    const newImage = new Image({
        url,
        name,
        description,
        type,
        date,
        user: req.user.id
    });

    const saveImage = await newImage.save();
    res.json(saveImage);
};

// export const getImages = async(req,res) =>{
//     const tasks = await Image.find({user:req.user.id}).populate("user");
//     res.json(tasks);
// };

// export const getImage = async(req,res) =>{
//     const task = await Image.findById(req.params.id).populate("user");
//     if(!task) return res.status(400).json({message:"task not found"});
//     res.json(task);
// };

// export const updateImage = async(req,res) =>{
//     const image = await Image.findByIdAndUpdate(req.params.id, req.body, {new:true});
//     if(!image) return res.status(400).json({message:"task not found"});
//     res.json(image);
// };

// export const deleteImages = async(req,res) =>{
//     const image = await Image.findByIdAndDelete(req.params.id);
//     if(!image) return res.status(400).json({message:"task not found"});
//     return res.sendStatus(204);
// };