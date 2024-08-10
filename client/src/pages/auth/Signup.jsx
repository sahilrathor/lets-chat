import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
    const navigate = useNavigate();
    const [pageName, setpageName] = useState("Signup");
    const { signup, isLoading } = useSignup();

    const [formData, setformData] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const handleFormInput = (e) => {
        const { name, value } = e.target;

        setformData((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (gender) => {
        setformData({
            ...formData,
            gender: gender,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData)
        await signup(formData);
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
                                Fullname
                            </span>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter Fullname"
                            value={formData.fullName}
                            onChange={handleFormInput}
                            // // required
                            className="input w-full input-bordered h-10"
                        />
                    </div>
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
                            placeholder="Enter Username"
                            onChange={handleFormInput}
                            // required
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
                            placeholder="Enter Password"
                            onChange={handleFormInput}
                            // required
                            className="input w-full input-bordered h-10"
                        />
                    </div>
                    <div>
                        <label className="label p-2 pb-1">
                            <span className="text-base label-text">
                                Confirm Password
                            </span>
                        </label>
                        <input
                            type="text"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            placeholder="Enter Confirm Password"
                            onChange={handleFormInput}
                            // required
                            className="input w-full input-bordered h-10"
                        />
                    </div>

                    <div className="flex px-1 gap-3">
                        <div className="form-control">
                            <label className="label gap-1 cursor-pointer">
                                <span className="label-text">Male</span>
                                <input
                                    type="checkbox"
                                    name="gender"
                                    value="male"
                                    onChange={() => {
                                        handleCheckboxChange("male");
                                    }}
                                    checked={formData.gender === "male"}
                                    // required = {formData.gender === ""}
                                    // defaultChecked
                                    className="checkbox checkbox-sm border-slate-400"
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label gap-1 cursor-pointer">
                                <span className="label-text">Female</span>
                                <input
                                    type="checkbox"
                                    name="gender"
                                    value="female"
                                    onChange={() => {
                                        handleCheckboxChange("female");
                                    }}
                                    checked={formData.gender === "female"}
                                    // required = {formData.gender === ""}
                                    // defaultChecked
                                    className="checkbox checkbox-sm border-slate-400"
                                />
                            </label>
                        </div>
                    </div>

                    <Link
                        to="/login"
                        className="text-sm m-2 mt-4 inline-block hover:underline hover:text-sky-300"
                    >
                        Already have an account?
                    </Link>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="btn btn-block btn-sm"
                    >
                        {isLoading ? (
                            <span className="loading loading-dots loading-nd"></span>
                        ) : (
                            "Signup"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;

// // BASIC CODE
// import React, { useState } from "react";

// const Signup = () => {
//     const [pageName, setpageName] = useState("Signup");

//     return (
//         <div className="flex flex-col justify-center items-center min-w-96 m-auto">
//             <div className="w-full p-6 shadow-md rounded-md bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5">
//                 <h1 className="text-slate-50  text-3xl font-semibold text-center">
//                     {pageName}
//                 </h1>
//                 <form action="">
//                     <div>
//                         <label className="label p-2 pb-1">
//                             <span className="text-base label-text">
//                                 Fullname
//                             </span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter Fullname"
//                             className="input w-full input-bordered h-10"
//                         />
//                     </div>
//                     <div>
//                         <label className="label p-2 pb-1">
//                             <span className="text-base label-text">
//                                 Username
//                             </span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter Username"
//                             className="input w-full input-bordered h-10"
//                         />
//                     </div>
//                     <div>
//                         <label className="label p-2 pb-1">
//                             <span className="text-base label-text">
//                                 Password
//                             </span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter Password"
//                             className="input w-full input-bordered h-10"
//                         />
//                     </div>
//                     <div>
//                         <label className="label p-2 pb-1">
//                             <span className="text-base label-text">
//                                 Confirm Password
//                             </span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter Confirm Password"
//                             className="input w-full input-bordered h-10"
//                         />
//                     </div>

//                     <div className="flex px-1">
//                         <div className="form-control">
//                             <label className="label gap-1 cursor-pointer">
//                                 <span className="label-text">Male</span>
//                                 <input
//                                     type="checkbox"
//                                     name="gender"
//                                     defaultChecked
//                                     className="checkbox checkbox-sm border-slate-400"
//                                 />
//                             </label>
//                         </div>
//                         <div className="form-control">
//                             <label className="label gap-1 cursor-pointer">
//                                 <span className="label-text">Female</span>
//                                 <input
//                                     type="checkbox"
//                                     name="gender"
//                                     defaultChecked
//                                     className="checkbox checkbox-sm border-slate-400"
//                                 />
//                             </label>
//                         </div>
//                     </div>

//                     <a
//                         href="#"
//                         className="text-sm p-2 pt-4 inline-block hover:underline hover:text-sky-300"
//                     >
//                         Already have an account?
//                     </a>

//                     <button className="btn btn-block btn-sm">Signup</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Signup;
