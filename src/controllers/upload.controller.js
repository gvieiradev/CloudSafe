import Image from "../models/image.model.js";
import {uploadCloudinary} from "../cloudinary/cloudinary.js";

export const uploadImageF = async(req,res) =>{
    const user = req.user.id;
    const fileStr = req.body.data;

    try {
        const uploadResponse = await uploadCloudinary(fileStr)

        const newImage = new Image({url:uploadResponse.secure_url, format:uploadResponse.format, type:uploadResponse.resource_type, publicID:uploadResponse.public_id, user});
        const savedImage = await newImage.save();


        res.json({
            id: savedImage._id,
            url:savedImage.url,
            format:savedImage.format,
            type:savedImage.type,
            createdAt:savedImage.createdAt,
            updatedAt:savedImage.updatedAt,
            publicID:savedImage.publicID,
            user:savedImage.user
        });


    } catch (error) {
        console.error(error)
        res.status(500).json({err:"something went wrong"})
    }
};