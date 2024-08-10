import React, { useEffect, useMemo } from "react";
import useConversation from '../../zustand/useConversation.js'
import { useSocketContext } from "../context/socketContext.jsx";

const Conversation = ({value}) => {

    const {selectedConversation, setSelectedConversation} = useConversation()
    const isSelected = selectedConversation?._id === value._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(value._id)

    

    const selectConversation = () => {
        setSelectedConversation(value)
        localStorage.setItem("selectedChat", JSON.stringify(value));
    }
    

    return (
        <>
            <div onClick={selectConversation} className={`flex gap-2 items-center hover:bg-primary/30 w-full rounded p-2 py-2 cursor-pointer ${isSelected && 'bg-primary/80 hover:bg-primary/90'} ralative select-none`}>
                <div className={`avatar ${isOnline && 'online'}`}>
                    <div className="w-10 rounded-full">
                        <img src={value.profilepic} alt={`${value.userName}'s profile pic`} draggable= 'false' />
                    </div>
                </div>
                <div className={`font-semibold text-sm text-gray-300 ${isSelected && 'text-white'}`}>{value.fullName}</div>
            </div>
            <div className="divider py-0 px-6 my-0 h-1 "></div>
        </>
    );
};

export default Conversation;
