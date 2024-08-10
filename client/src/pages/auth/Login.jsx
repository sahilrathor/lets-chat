import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [pageName, setpageName] = useState("Login");
    const { login, isLoading } = useLogin();
    const [formData, setformData] = useState({
        userName: "",
        password: "",
    });


    // temp code
    console.log('url',import.meta.env.VITE_RENDER_URL)

    const handleFormInput = (e) => {
        const { name, value } = e.target;

        setformData((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(formData);
    };

    return (
        <div className="flex flex-col justify-center items-center min-w-96 m-auto select-none">
            <div className="w-full p-6 shadow-md rounded-md bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5">
                <h1 className="text-slate-50  text-3xl font-semibold text-center">
                    {pageName}
                </h1>
                <form onSubmit={handleSubmit} action="">
                    <div>
                        <label className="label p-2 pb-1">
                            <span className="text-base label-text">
                                Username
                            </span>
                        </label>
                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleFormInput}
                            placeholder="Enter Username"
                            className="input w-full input-bordered h-10"
                        />
                    </div>
                    <div>
                        <label className="label p-2 pb-1">
                            <span className="text-base label-text">
                                Password
                            </span>
                        </label>
                        <input
                            type="text"
                            name="password"
                            value={formData.password}
                            onChange={handleFormInput}
                            placeholder="Enter Password"
                            className="input w-full input-bordered h-10"
                        />
                    </div>
                    <Link
                        to="/signup"
                        className="text-sm m-2 mt-4 inline-block hover:underline hover:text-sky-300"
                    >
                        Don't have an account?
                    </Link>

                    <button
                        disabled={isLoading}
                        className="btn btn-block btn-sm"
                    >
                        {isLoading? <span className="loading loading-dots loading-md"></span> : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

// BASIC CODE
// import React,{useState} from 'react'

// const Login = () => {
//     const [pageName, setpageName] = useState('Login')

//   return (
//     <div className="flex flex-col justify-center items-center min-w-96 m-auto">
//     <div className="w-full p-6 shadow-md rounded-md bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
//         <h1 className='text-slate-50  text-3xl font-semibold text-center'>
//             {pageName}
//         </h1>
//         <form action="">
//             <div>
//                 <label className='label p-2 pb-1'>
//                     <span className='text-base label-text'>Username</span>
//                 </label>
//                 <input type="text" placeholder='Enter Username' className='input w-full input-bordered h-10' />
//             </div>
//             <div>
//                 <label className='label p-2 pb-1'>
//                     <span className='text-base label-text'>Password</span>
//                 </label>
//                 <input type="text" placeholder='Enter Password' className='input w-full input-bordered h-10' />
//             </div>
//             <a href="#" className='text-sm p-2 pt-4 inline-block hover:underline hover:text-sky-300'>
//                 Don't have an account?
//             </a>

//             <button className='btn btn-block btn-sm'>Login</button>
//         </form>
//     </div>
//     </div>
//   )
// }

// export default Login
