import {v2 as cloudinary} from 'cloudinary';
import { CLOUD_NAME, API_KEY_CLOUDINARY, API_SECRET_KEY_CLOUDINARY } from '../config.js';

cloudinary.config({ 
  cloud_name: CLOUD_NAME, 
  api_key: API_KEY_CLOUDINARY, 
  api_secret: API_SECRET_KEY_CLOUDINARY
});

const opts = {
  overwrite:true,
  invalidate:true,
  resource_type:"auto",
};

export const uploadImage = (image) => { //image => base64
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, opts, (error, result) => {
      if (result && result.secure_url){
        console.log(result.secure_url);
        return resolve(result.secure_url)
      }
      console.log("epaaa",error.message);
      return reject({message: error.message});
    });
  });
};