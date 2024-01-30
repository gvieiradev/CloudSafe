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

export const searchCloudinary = async() =>{
  const result = []
  const options = {type:"upload", prefix:"User_Avatar", max_result:10}

  await cloudinary.api.resources(options, function(error, res){
    if (error) console.log(error);

    const resources = res.resources;

    for (const res in resources){
      result.push({
        public_id:resources[res]?.public_id,
        format:resources[res]?.format,
        secure_url:resources[res]?.secure_url,
        resource_type: resources[res]?.resource_type,
        created_at:resources[res]?.created_at,
        last_modified:resources[res]?.last_modified});
    }
  });
  return result
}