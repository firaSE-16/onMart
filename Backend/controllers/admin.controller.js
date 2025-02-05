import Category from '../models/Category.model.js'
import User from '../models/Category.model.js'

export const addCategory = async (req,res) => {
    const {name,attributes}= req.body

    console.log (req.user.role)
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