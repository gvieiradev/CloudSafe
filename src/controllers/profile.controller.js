import User from "../models/user.model.js";
import { decodeAccesToken } from "../libs/jwt.js";

export const updateProfile = async(req, res) =>{
    const token = req.cookies.token;
    console.log("update ",token)

    const decodeToken = await decodeAccesToken(token);
    try {
        const userDataFound = await User.findById(decodeToken.id);
        res.json({
            id:userDataFound._id,
            name:userDataFound.name,
            username:userDataFound.username,
            email:userDataFound.email,
            password:userDataFound.password,
        });
    } catch (error) {
        console.log(error)
    }
};

export const profile = async (req, res) =>{
    const userFound = await User.findById(req.user.id);

    if(!userFound) return res.status(400).json({message: "User not found"});

    return res.json({
        id:userFound._id,
        username:userFound.username,
        name:userFound.name,
        email:userFound.email,
        createdAt:userFound.createdAt,
        updateAt:userFound.updatedAt,
    });
};