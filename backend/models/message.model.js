import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
   senderId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
   },
   receiverId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
   },
   message:{
    type: String,
    required: true,
   }
// createdAt, updatedAt  => in frontend we do message.createdAt: it will give time by mongoose
}, {timestamps: true});

//creating the collection with the messageSchema schema
const Message = mongoose.model('Message', messageSchema);

export default Message;