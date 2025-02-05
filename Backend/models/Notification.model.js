import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  role: { type: String, enum: ["Buyer", "Seller", "Admin"], required: true },
  type: { 
    type: String, 
    enum: [
        "Order Placed",  
        "Order Shipped",  
        "Order Delivered",  
        "Order Cancelled",  
        "Order Updated",  
        "New Message",  
        "Product Update",  
        "System Alert",  
        "Successfully Approved",  
        "Seller Rejected",  
        "Dispute Raised",  
        "Dispute Resolved",  
        "Report Received",  
        "Vendor Reported",  
        "Account Suspended",  
        "Payment Successful",  
        "Refund Processed",  
        "Review Submitted",  
        "Low Stock Alert",  
        "Promotion Alert"  
      ]
      , 
    required: true 
  },
  message: { type: String, required: true }, 
  relatedId: { type: mongoose.Schema.Types.ObjectId }, 
  status: { type: String, enum: ["Unread", "Read"], default: "Unread" },
  createdAt: { type: Date, default: Date.now }
});

const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;
