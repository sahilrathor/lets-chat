import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../components/context/authContext";

const useLogout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {setAuthUser} = useAuthContext();

    const logout = async () => {
        const apiUrl = import.meta.env.VITE_RENDER_URL;
    
        setIsLoading(true);

        try {
            const res = await fetch(`${apiUrl}/api/auth/logout`, {
                method: "POST",
                credentials: "include",
                Headers: {"Content-Type": "application/json"}
            })

            const data = await res.json();
            if(data.error) {
                throw new Error(data.error)
            }

            localStorage.removeItem("loggedIn-chatuser");
            setAuthUser(null);
            
        } catch (error) {
            toast.error(error.message)
        } finally{
            setIsLoading(false)
        }
    }

    return {logout, isLoading}
}

export default useLogout;