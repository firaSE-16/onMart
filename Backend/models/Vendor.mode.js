import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  storeName: { type: String, required: true, unique: true },
  storeDescription: { type: String },
  storeLogo: { type: String }, 
  contactEmail: { type: String},
  contactPhone: { type: String },
  location:{ type: String},
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zipCode: String
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], 
  status: { type: String, enum: ["Pending", "Active", "Suspended"], default: "Pending" },
  createdAt: { type: Date, default: Date.now }
});

const Vendor = mongoose.model("Vendor")||mongoose.model("Vendor", vendorSchema)
export default Vendor;
