import React, { useState } from "react";
import _ from 'lodash'
import useConversation from '../../zustand/useConversation.js'
import useGetConversation from "../../hooks/useGetConversation.js";

const SearchBar = () => {
    const [searchName, setSearchName] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversation } = useGetConversation();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!searchName || !conversation) return; // Check if conversations is undefined/null

        const foundConversation = conversation.find((c) => 
            _.trim(c.fullName).replace(' ', '').toLowerCase().includes(_.trim(searchName).replace(' ', '').toLowerCase())
    );

        if (foundConversation) {
            setSelectedConversation(foundConversation); // Update selected conversation in state
            setSearchName(""); // Clear search input after selecting
        } else {
            console.log("No conversation found");
        }
    };

    return (
        <div className="fixed z-20 top-0 pt-4">
            <form onSubmit={handleSubmit} action="">
                <label className="h-10 w-full input input-bordered pr-1 flex items-center bg-slate-200 rounded-2xl gap-2">
                    <input
                        type="text"
                        name="search"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        className="grow text-slate-900 placeholder:text-slate-800"
                        placeholder="Search"
                        aria-label="Search conversations"
                    />
                    <button type="submit" aria-label="Submit search">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-8 w-11 opacity-70 bg-primary/80 hover:bg-primary text-white p-1 px-2 rounded-xl"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </label>
            </form>
      <div className="divider h-1 mb-3"></div>

        </div>
    );
};

export default SearchBar;
