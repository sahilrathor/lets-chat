import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import { useAuthContext } from "../components/context/authContext";

const useSignup = () => {
    const apiUrl = import.meta.env.VITE_RENDER_URL;

    const [isLoading, setIsLoading] = useState();
    const {setAuthUser} = useAuthContext()

    const signup = async ({fullName, userName, password, confirmPassword, gender}) => {
        const validInput = handleInputError({fullName, userName, password, confirmPassword, gender});
        if(!validInput) return;

        setIsLoading(true);

        try {
            const res = await fetch(`${apiUrl}/api/auth/signup`, {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({fullName, userName, password, confirmPassword, gender})
            })

            const data = await res.json();
            console.log(data)
            
            if(data.error){
                throw new Error(data.error)
            }
            
            if(res.status === 201) {
                toast.success("User added successfully", {duration: 1000});
            }
            
            localStorage.setItem("loggedIn-chatuser", JSON.stringify(data));
            setAuthUser(data)
            
        } catch (err) {
            toast.error(err.message)
        } finally {
            setIsLoading(false);
        }
    }

    return {signup, isLoading}
}

export default useSignup;

const handleInputError = ({fullName, userName, password, confirmPassword, gender}) => {
    if(!fullName || !userName || !password || !confirmPassword || !gender ) {
        toast.error("Please fill in all the fields", {duration: 2000});
        console.log('asdf')
        return false
    }

    if(password !== confirmPassword){
        toast.error("Password don't match", {duration: 2000})
        return false
    }

    if(password.length < 6){
        toast.error("Password is too small (must be > 6digits)", {duration: 2000})
        return false
    }

    return true;
}