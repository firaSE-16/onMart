import express from 'express';
import Vendor from '../models/Vendor.model.js';
import cloudinary from 'cloudinary';
import fs from 'fs';

export const addVendor = async (req, res) => {
  try {

    if (!(req.user.role === 'seller')) {
      return res.status(403).json({ message: 'Only sellers can add vendors' });
    }

    
    const { storeName, storeDescription, location, address } = req.body;

   
    let storeLogo = null;
    

    if (req.file) {
      const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
        folder: 'store_logo', 
        resource_type: 'image',
      });
      
      storeLogo = cloudinaryResponse.secure_url; 
      
      
      fs.unlinkSync(req.file.path);
    }

  
    const vendor = new Vendor({
      userId: req.user._id,
      storeName,
      storeDescription,
      storeLogo,
      location,
      address
    });

    await vendor.save();

    
    res.status(201).json({ message: 'Vendor added successfully', vendor });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding vendor', error });
  }
};
