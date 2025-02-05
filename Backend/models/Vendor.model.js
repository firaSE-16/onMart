import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  storeName: { type: String, required: true },
  storeDescription: { type: String ,default: ""},
  storeLogo: { type: String ,default: ""}, 
  contactEmail: { type: String ,default: ""},
  contactPhone: { type: String ,default: ""},
  location:{ type: String ,default: ""},
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

const Vendor = mongoose.models.Vendor||mongoose.model("Vendor", vendorSchema)
export default Vendor;
