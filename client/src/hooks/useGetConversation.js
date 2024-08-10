import { useState,useEffect } from "react";
import toast from 'react-hot-toast'

const useGetConversation = () => {
    const apiUrl = import.meta.env.VITE_RENDER_URL;

    const [isLoading, setIsLoading] = useState(false)
    const [conversation, setConversation] = useState([])

    useEffect(() => {
      const getConversation = async() => {
        setIsLoading(true)
        
        try {
            const res = await fetch(`${apiUrl}/api/users`, {
                method: 'GET',
                credentials: 'include', // Important
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json()

            if (data.error) {
                throw new Error(data.error)
            }

            setConversation(data);

        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }

      }

      getConversation();
    
    }, [])
    
return {conversation, isLoading}
}

export default useGetConversation;