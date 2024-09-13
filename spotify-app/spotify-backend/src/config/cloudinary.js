import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {
    try {
        await cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY,
        });
        console.log('Connected to Cloudinary');
    } catch (error) {
        console.error('Failed to connect to Cloudinary:', error);
    }
}


export default connectCloudinary;