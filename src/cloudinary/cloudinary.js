import {v2 as cloudinary} from 'cloudinary';
import { CLOUD_NAME, API_KEY_CLOUDINARY, API_SECRET_KEY_CLOUDINARY } from '../config.js';

export const cloudConfig = cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY_CLOUDINARY,
  api_secret: API_SECRET_KEY_CLOUDINARY,
});

export const uploadCloudinary = async(data) =>{
  const resultUpload = await cloudinary.uploader.upload(data,{upload_preset:"ml_default",});
  return resultUpload
};