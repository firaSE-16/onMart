import cloudinary from "../config/Cloudinary";


export const addProduct= async (req,res)=>{
    const upload = multer({ dest: 'uploads/' }); 
    const { name, price, category, description, stock, images,variations } = req.body;

     let image = null;

     const newImage =[]

     images.map((image)=>{

        upload.single('image')

        if (req.file){
            const cloudinaryResponse = cloudinary.uploader.upload(req.file.path, {
              folder: 'product_image', 
              resource_type: 'image',
            });
      }        
        image.url=cloudinaryResponse.secure_url;

        newImage.push(image);


     }) 
     
      
          
          
          
          
          
          fs.unlinkSync(req.file.path);
      


    


}


export const updateProduct =(req,res)=>{

}

export const deleteProduct = (req,res)=>{

}

export const getProduct = (req,res)=>{

}

export const getAllProduct = (req,res)=>{

}



export const searchProduct = (req,res)=>{


}

export const getProductByCategory = (req,res)=>{

}

export const filterProduct = (req,res)=>{

}

export const getProductInfo = (req,res)=>{

}

export const getAllProductInfo = (req,res)=>{

}


export const addBanner = (req,res)=>{

}

