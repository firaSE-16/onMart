import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      variation: {type:String},
      attributes: {type:mongoose.Schema.Types.Mixed},
      quantity: { type: Number, required: true, min: 1 },
      price: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
