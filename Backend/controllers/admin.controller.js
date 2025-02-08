import Category from '../models/Category.model.js'
import User from '../models/Category.model.js'

export const addCategory = async (req,res) => {
    const {name,attributes}= req.body

  
    if(!(req.user.role == 'admin')){
        return res.status(403).json({message:"Unauthorized user"})
    }
    
    if(!name||!attributes){ 
        return res.status(400).json({message:"Invalid"})
    }

    const existingCategory = await Category.findOne({name:name})
    
    if(existingCategory){ return res.status(404).json({message:"Category already existed"})
    }
    const category = await Category.create({name:name,attributes:attributes})

   


    category.save();
    res.status(201).json("Category successfully created");
}



export const deleteCategory = (req, res) =>{
    const {name}= req.body
    if(!(req.user.role == 'admin')){
        return res.status(403).json({message:"Unauthorized user"})
    }
    Category.findByIdAndDelete({name:name})
    res.status(200).json("Category deleted");

}

export const updateCategory = (req, res) =>{
    
    if(!(req.user.role == 'admin')){
        return res.status(403).json({message:"Unauthorized user"})
    }

    const {name,attributes} = req.body
    if(!(req.user.role == 'admin')){
        return res.status(403).json({message:"Unauthorized user"})
    }
    Category.updateOne({name:name},{attributes:attributes})
    res.status(200).json("Category updated");

}

export const getAllCategories = (req, res) =>{
    const category = Category.findAll()
    res.status(200).json(category);


}