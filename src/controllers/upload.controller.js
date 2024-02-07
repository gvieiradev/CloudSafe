import {uploadCloudinary,searchCloudinary,deleteCloudinary} from "../cloudinary/cloudinary.js";

export const uploadImageF = async(req,res) =>{
    const fileStr = req.body.data;

    try {
        const uploadResponse = await uploadCloudinary(fileStr)
        res.json(uploadResponse);
    } catch (error) {
        console.error(error)
        res.status(500).json({err:"something went wrong"})
    }
};

export const searchUpload = async(req,res)=>{
    try {
        const result = await searchCloudinary();
        res.json(result);
    } catch (error) {
        console.error(error)
    }
};

export const removeCloudinary = async(req, res)=>{
    try {
        const r = await deleteCloudinary(req.params.id)
        res.json(r)
    } catch (error) {
        console.log(error)
    }
}