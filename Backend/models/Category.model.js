import mongoose from "mongoose";

const catagorySchema = new mongoose.Schema({
     name:{
        type: String,
        required: true,
        unique: true,
     },
     attributes:[
        {
            name:String,
            type: String,
            unit: String,
            
        }
     ]
},{
    timestamps: true,
})


const Category = mongoose.model('Category') || mongoose.model('Category', catagorySchema);

export default Category;