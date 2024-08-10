import React, { useState, useRef, useEffect } from 'react';
import {BsSend} from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage';
import useConversation from '../../zustand/useConversation';

const ChatInput = () => {
    const [message, setMessage] = useState('');
    const { sendMessage, isLoading } = useSendMessage();
    const { selectedConversation } = useConversation();
    const inputRef = useRef(null)

    useEffect(() => {
        if (selectedConversation) {
          inputRef.current?.focus();
        }
      }, [selectedConversation]);
    
    const handleSendMessage = async (e) => {
        e.preventDefault()
        if (message.trim() && selectedConversation?._id) {
            await sendMessage(message);
            setMessage('');  // Clear input after sending
        }
    }


    return (
        <div >
            <form onSubmit={handleSendMessage} action="" className='chat-input h-10  flex items-center relative'>
            <input
                type='text'
                value={message}
                
                onChange={(e) => setMessage(e.target.value)}
                disabled={isLoading}
                placeholder='Type your message...'
                className='input h-full w-full text-sm focus:border-1 focus:border-primary'
            />
            <button type='submit' disabled={isLoading} className={`flex justify-center items-center p-1  hover:text-primary absolute right-3 ${message && 'text-primary'}`}>
                <BsSend className='w-5 h-5 '  />
            </button>
            </form>
        </div>
    );
}

export default ChatInput;
