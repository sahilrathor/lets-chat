import { useState } from "react";
import toast from 'react-hot-toast'
import { useAuthContext } from "../components/context/authContext";

const useLogin = () => {
    const apiUrl = import.meta.env.VITE_RENDER_URL;

    const [isLoading, setisLoading] = useState(false)
    const {setAuthUser} = useAuthContext();

    const login = async({userName, password}) => {
        const success = handleInputErrors({userName, password});
        if(!success) return;
        setisLoading(true)
        try {
            const res = await fetch(`${apiUrl}/api/auth/login`, {
                method: "POST",
                credentials: 'include',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({userName, password})
            })

            const data = await res.json();
            if(data.error) {
                throw new Error(data.error)
            }

            if(res.status === 200) {
                toast.success("logged in successfully")
            }

            localStorage.setItem("loggedIn-chatuser", JSON.stringify(data));
            setAuthUser(data);

        } catch (err) {
            toast.error(err.message);
        } finally {
            setisLoading(false);
        }
    }

    return {login, isLoading};
}

export default useLogin;

const handleInputErrors = ({userName, password}) => {
    if(!userName || !password) {
        toast.error("Please fill in all the fields");
        return false;
    }

    return true;
}