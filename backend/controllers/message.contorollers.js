import conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from '../socket/socket.js';

export const sendMessage = async(req, res)=>{
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let Conversation = await conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        });
        if(!Conversation){
            Conversation = await conversation.create({
                participants: [senderId, receiverId],
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })
        if(newMessage){
            Conversation.messages.push(newMessage._id);
        }

        

        //both this line will run sequntially to do it in parallel we are using promise
        // await Conversation.save();
        // await newMessage.save();
        
        //it will run in parallel   
        await Promise.all([Conversation.save(), newMessage.save()]);
         
        //socket io functionality to make it real time 

        const recieverSocketId = getReceiverSocketId(receiverId);
        if(recieverSocketId){
            //io.to(<socket_id>).emit() used to send the events to spedific client
            io.to(recieverSocketId).emit("newMessage", newMessage);
        }


        res.status(200).json(newMessage);


    } catch (error) {
        console.log("error in sendMessage controller", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getMessages = async (req, res)=>{
    try {
        const {id: uerToChatId} = req.params;
        const senderId = req.user._id;
        

        //inside conversation schema we have stored array of message ids of messages
        //now to get every message mongoose gives us a method called populate 
        // so now it will return array of objects and each object will have message  
        const Conversation = await conversation.findOne({
            participants: {
                $all: [senderId, uerToChatId]
            }
        }).populate("messages");

        if(!Conversation){
            return res.status(200).json([]);
        }
        res.status(200).json(Conversation.messages);

        


    } catch (error) {
        console.log("error in getMessages controller", error);
        res.status(500).json({ error: "Internal server error" });
    }
}