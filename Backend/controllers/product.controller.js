import cloudinary from "../config/Cloudinary";
import Product from "../models/Product.model.js";
import multer from "multer";
import fs from "fs";
import Banner from "../models/banner.model.js";




const upload = multer({ dest: "uploads/" });

export const addProduct = async (req, res) => {
  try {
    const { name, price, category, description, variations: variationsStr, attributes: attributesStr } = req.body;

  
    const parsedVariations = typeof variationsStr === "string" ? JSON.parse(variationsStr) : variationsStr;
    const parsedAttributes = typeof attributesStr === "string" ? JSON.parse(attributesStr) : attributesStr;


    if (!req.files || req.files.length !== parsedVariations.length) {
      return res.status(400).json({ 
        message: "Number of images must match number of variations" 
      });
    }

    
    for (let i = 0; i < parsedVariations.length; i++) {
      const file = req.files[i];
      const cloudinaryResponse = await cloudinary.uploader.upload(file.path, {
        folder: "product_images",
        resource_type: "image",
      });
      
      parsedVariations[i].image = cloudinaryResponse.secure_url;
      fs.unlinkSync(file.path);
    }

    
    const newProduct = await Product.create({
      name,
      price,
      category,
      description,
      variations: parsedVariations,
      attributes: parsedAttributes,
      sellerId: req.user._id,
    });

    res.status(201).json({
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Server error" });
  }
};




export const updateProduct = async (req,res)=>{
  try {
    const { name, price, category, description, variations: variationsStr, attributes: attributesStr,_id } = req.body;

  
    const parsedVariations = typeof variationsStr === "string" ? JSON.parse(variationsStr) : variationsStr;
    const parsedAttributes = typeof attributesStr === "string" ? JSON.parse(attributesStr) : attributesStr;


    if (!req.files || req.files.length !== parsedVariations.length) {
      return res.status(400).json({ 
        message: "Number of images must match number of variations" 
      });
    }

    
    for (let i = 0; i < parsedVariations.length; i++) {
      const file = req.files[i];
      const cloudinaryResponse = await cloudinary.uploader.upload(file.path, {
        folder: "product_images",
        resource_type: "image",
      });
      
      parsedVariations[i].image = cloudinaryResponse.secure_url;
      fs.unlinkSync(file.path);
    }

    
    const newProduct = await Product.findOne({_id:_id})
      newProduct.name=name||newProduct.name
      newProduct.price=price||newProduct.price
       newProduct.category=category||newProduct.category
      newProduct.description=description||newProduct.description
      newProduct.variations= parsedVariations||newProduct.variations
      newProduct.attributes= parsedAttributes||newProduct.attributes
   

    res.status(201).json({
      message: "Product updated successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error while updating the product:", error);
    res.status(500).json({ message: "Server error" });
  }

}

export const deleteProduct = async (req,res)=>{
  try {
    const { _id } = req.body;
    await Product.findByIdAndDelete({_id});
    res.status(200).json({ message: "Product deleted successfully" });
  }catch(err){
      console.error("Error while deleting the product:", error);
    res.status(500).json({ message: "Server error" });
  }

}

export const getProduct = async (req,res)=>{
  try {
    const { _id } = req.params;
    const product = await Product.findById(_id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error while getting the product:", error);
    res.status(500).json({ message: "Server error" });
  }


}

export const getAllProduct = async (req,res)=>{
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error while getting all products:", error);
    res.status(500).json({ message: "Server error" });
  }
 }





export const searchProduct = async (req,res)=>{
  try {
    const { query } = req;
    const products = await Product.find({
      $text: { $search: query },
    });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error while searching products:", error);
    res.status(500).json({ message: "Server error" });
  }


}

export const getProductByCategory = async (req,res)=>{
  try {
    const { category } = req.params;
    const products = await Product.find({ category });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error while getting products by category:", error);
    res.status(500).json({ message: "Server error" });
  }
 
}

export const filterProduct = async (req,res)=>{
  try {
    const { query } = req;
    const products = await Product.find({
      $and: [
        { $text: { $search: query } },
        { variations: { $elemMatch: { size: query } } },
      ],
    });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error while filtering products:", error);
    res.status(500).json({ message: "Server error" });
  }

}

export const getProductInfo = (req,res)=>{


}

export const getAllProductInfo = (req,res)=>{

}


export const addBanner = async (req,res)=>{
  const {titel, category} = req.params

  const cloudinaryResponse = await cloudinary.uploader.upload(file.path, {
    folder: "banner_images",
    resource_type: "image",
  });
  
  imageUrl = cloudinaryResponse.secure_url;
  fs.unlinkSync(file.path);

  const newBanner = Banner.create({
    titel,
    category,
    imageUrl,
  })


}

