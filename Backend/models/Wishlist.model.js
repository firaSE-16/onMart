import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      variation: String,
      attibutes: { type: mongoose.Schema.Types.Mixed}
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);
export default Wishlist;
