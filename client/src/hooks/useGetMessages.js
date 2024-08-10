import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const apiUrl = import.meta.env.VITE_RENDER_URL;

    const [isLoading, setIsLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();


    useEffect(() => {
        const getMessages = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`${apiUrl}/api/messages/${selectedConversation._id}`, {
                    method: 'GET',
                    credentials: 'include', // Important
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                // console.log(data);
                setMessages(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (selectedConversation?._id) {
            getMessages();
        }

    }, [selectedConversation, setMessages]);

    return { messages, isLoading };
};

export default useGetMessages;
