import jwt  from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const decodeAccesToken= async(token)=>{
    const decode = jwt.decode(token);
    return decode
}

export function createdAccessToken(payload){
    return new Promise((resolve, reject) =>{
        jwt.sign(payload, TOKEN_SECRET,
            (err, token) =>{
                if (err) reject(err)
                resolve(token)
            }
        );
    });
}