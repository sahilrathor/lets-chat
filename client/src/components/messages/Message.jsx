import React from "react";
import useConversation from "../../zustand/useConversation";
import {useAuthContext} from '../context/authContext.jsx'


const Message = ({msg}) => {
    const {selectedConversation} = useConversation();
    const {authUser} = useAuthContext()
    const msgLeft = selectedConversation._id === msg.senderId 
    return (
        <div className={`chat ${ msgLeft? 'chat-start': 'chat-end'} select-none `}>
            <div className="chat-image avatar">
                <div className="w-8 rounded-full">
                    <img src={msgLeft? selectedConversation.profilepic: authUser.profilePic} draggable="false" />
                </div>
            </div>
            <div className={`chat-bubble ${msgLeft? 'bg-slate-200 text-slate-900' : 'bg-primary/80 text-white'} select-text`}>{msg.message}</div>
            <div className="chat-footer opacity-70 text-[10px] flex gap-1 items-center ">{msg.createdAt}</div>
        </div>
    );
};

export default Message;
