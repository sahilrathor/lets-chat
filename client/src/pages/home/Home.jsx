import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import LogoutButton from "../../components/sidebar/LogoutButton";

const Home = () => {
    return (
            <div className="flex sm:h-full md:min-h-[550px] md:max-h-[650px] shadow-md rounded-lg overflow-hidden  bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5">
                
                <Sidebar />
                <div className="divider divider-horizontal px-0 mx-0 w-1"></div>
                <MessageContainer />
            </div>
    );
};

export default Home;
