import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storageProduct = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'product_images',
    allowed_formats: ['jpg', 'jpeg', 'png'], 
  },
});
const storageProfile = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'profile_images',
    allowed_formats: ['jpg', 'jpeg', 'png'], 
  },
});
const storageLogo = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'logo_images',
    allowed_formats: ['jpg', 'jpeg', 'png'], 
  },
});
const storageFile = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'file_images',
    allowed_formats: ['jpg', 'jpeg', 'png','pdf'], 
  },
});

const uploadProduct = multer({ storageProduct });
const uploadProfile = multer({ storageProfile });
const uploadLogo = multer({ storageLogo });
const uploadFile = multer({ storageFile });

export { cloudinary, uploadProduct,uploadProfile,uploadLogo,uploadFile };
