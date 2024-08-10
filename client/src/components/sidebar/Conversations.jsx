import React, { useEffect } from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";


const Conversations = () => {
    const { conversation, isLoading } = useGetConversation();
    const {selectedConversation, setSelectedConversation} = useConversation();

    // useEffect(()=>{
    //     console.log("selected chat:", localStorage.getItem("selectedChat") || null)
    //     // setSelectedConversation(JSON.parse(localStorage.getItem("selectedChat")))
    // },[])
    // console.log(conversation);
    return (
        <div
            id="Conversations"
            className="flex flex-col h-full rounded-lg overflow-auto hide-scrollbar"
        >
            {isLoading ? (
                <span className="loading loading-rings loading-md "></span>
            ) : (
                conversation.map((value, index) => (
                    <Conversation key={value._id} value={value} />
                    // console.log(value)
                ))
            )}
        </div>
    );
};

export default Conversations;
