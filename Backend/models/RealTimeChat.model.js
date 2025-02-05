import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  message: { type: String, required: true }, 
  type: { 
    type: String, 
    enum: ['text', 'image', 'file', 'video'], 
    default: 'text' 
  }, 
  createdAt: { type: Date, default: Date.now }, 
  status: { type: String, enum: ['sent', 'delivered', 'read'], default: 'sent' }, 
  isDeleted: { type: Boolean, default: false }, 
  attachment: { type: String }, 
});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
