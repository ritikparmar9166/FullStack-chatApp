//this hook is for getting the message when one client send it 
//for listining the message send by the user
import { useEffect } from 'react'
import { useSocketContext } from '../context/socketContext'
import useConversation from '../zustand/useConversation';
import notificationSound from "../assets/sounds/notification.mp3"

const useListenMessages = () => {
   const {socket} = useSocketContext();
   const {messages, setMessages} = useConversation();

   useEffect(()=>{
    socket?.on('newMessage', (newMessage)=>{
        newMessage.shouldShake = true;
        const sound = new Audio(notificationSound);
        sound.play();
        setMessages([...messages, newMessage]);
    });
    //clean up function
    //if we don't do it then will here notification sound the as many time as the number of user connected
    return ()=>{
        socket?.off('newMessage');
    }
   },[socket, messages, setMessages])
}

export default useListenMessages;
