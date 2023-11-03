import {v2 as cloudinary} from 'cloudinary';
import { CLOUD_NAME, API_KEY_CLOUDINARY, API_SECRET_KEY_CLOUDINARY } from '../config.js';

export const cloudinaryConfig = cloudinary.config({ 
    cloud_name: CLOUD_NAME, 
    api_key: API_KEY_CLOUDINARY, 
    api_secret: API_SECRET_KEY_CLOUDINARY
});