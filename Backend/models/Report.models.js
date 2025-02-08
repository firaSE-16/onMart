import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  reporterId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  reportedVendorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  reason: { 
    type: String, 
    enum: ["Fraud", "Fake Product", "Scam", "Harassment", "Other"], 
    required: true 
  },
  description: { type: String, required: true }, 
  status: { type: String, enum: ["Pending", "Reviewed"], default: "Pending" }, 
  createdAt: { type: Date, default: Date.now }
});

const Report = mongoose.model("Report")|| mongoose.model("Report", reportSchema);
export default Report;
