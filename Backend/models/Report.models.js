import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  reporterId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Buyer reporting
  reportedVendorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Vendor being reported
  reason: { 
    type: String, 
    enum: ["Fraud", "Fake Product", "Scam", "Harassment", "Other"], 
    required: true 
  },
  description: { type: String, required: true }, // Details of the complaint
  status: { type: String, enum: ["Pending", "Reviewed"], default: "Pending" }, // Admin action
  createdAt: { type: Date, default: Date.now }
});

const Report = mongoose.model("Report")|| mongoose.model("Report", reportSchema);
export default Report;
