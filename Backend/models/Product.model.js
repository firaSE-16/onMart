import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  price: { type: Number, required: true },
  sold: { type: Number, default: 0 },
  description: { type: String, default: "" },
  variations: [
    {
      size: { type: String, default: "" },
      color: { type: String, default: "" },
      image: { type: String, default: "" },
      quantity: { type: Number, default: 1 },
    }
  ],
  attributes: { type: Map, of: String },  
  reviews: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, min: 1, max: 5 },
      reviewText: { type: String },
      createdAt: { type: Date, default: Date.now }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
