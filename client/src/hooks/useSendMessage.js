import { useState } from "react";
import toast from 'react-hot-toast';
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
    const apiUrl = import.meta.env.VITE_RENDER_URL;

    const [isLoading, setIsLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message) => {
        try {
            setIsLoading(true);

            const res = await fetch(`${apiUrl}/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
            });

            const data = await res.json();
            if (data.error) {
                toast.error(data.error);
            } else {
                setMessages([...messages, data]); 
            }

        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { sendMessage, isLoading };
}

export default useSendMessage;
