import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import MessageHeader from "./MessageHeader";
import {TiMessages} from 'react-icons/ti'
import useConversation from "../../zustand/useConversation.js";
import { useAuthContext } from "../context/authContext.jsx";

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation()
    const isChatSelected = true;
    const {authUser} = useAuthContext()


    useEffect(() => {
      return () => {
        setSelectedConversation(null)
      }
    }, [setSelectedConversation])

    

    return (
        <div className="md:w-[550px] flex flex-col">
            {selectedConversation ? (
                <>
                    <MessageHeader value={selectedConversation}/>
                    <Messages />
                    <MessageInput id={selectedConversation._id}/>
                </>
            ) : (
                <>
                    <div className="flex flex-col sm:text-lg md:text-xl text-gray-200 font-semibold  items-center justify-center w-full h-full">
                        <p>Welcome {authUser.fullName}👋</p>
                        <p>Select a <span className="text-primary/90">chat</span> to start messaging</p>
                        <TiMessages className="text-3xl md:text-6xl text-center text-primary/90" />
                        
                    </div>
                </>
            )}
        </div>
    );
};

export default MessageContainer;
