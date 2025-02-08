import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  category: { type: String,ref:"Category", required: true },
  price: { type: Number, required: true },
  stock: {type:Number, required: true},
  sold: {type:Number},
  description: { type: String, required: true },
  variations: [
    {
      color: String,
      image: String,      
    }
  ],
  attributes: { type: mongoose.Schema.Types.Mixed },
  review:{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"}, 
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
    rating: { type: Number, min: 1, max: 5,  }, 
    reviewText: { type: String },
}, 
  createdAt: { type: Date, default: Date.now }
});




const Product = mongoose.model("Product") || mongoose.model("Product", productSchema);
export default Product;