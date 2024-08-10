import { useEffect} from 'react'
import { useSocketContext } from '../components/context/socketContext'
import useConversation from '../zustand/useConversation';
import sendNotification from '../services/sendNotification';

const useListenMessages = () => {

    const {socket} = useSocketContext();
    const {messages, setMessages, selectedConversation} = useConversation();

    useEffect(() => {
        socket.on('newMessage', (newMessage)=>{
            setMessages([...messages, newMessage]);
            if(selectedConversation._id !== newMessage.senderId){
                sendNotification(newMessage.senderName, newMessage.message)
            }
        })

        return () => socket.off('newMessage')
    }, [socket, messages, setMessages])

}

export default useListenMessages