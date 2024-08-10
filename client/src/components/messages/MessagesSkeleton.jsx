import React from "react";

const MessagesSkeleton = () => {
    return (
        <div className="flex flex-col w-full gap-4 p-3 select-none">
            <div className="flex items-center h-10 gap-4">
                <div className="skeleton h-10 aspect-square shrink-0 rounded-full bg-slate-800/60"></div>
                <div className="flex flex-col h-full justify-between ">
                    <div className="skeleton h-4 w-20 bg-slate-600/50"></div>
                    <div className="skeleton h-4 w-28 bg-slate-600/50"></div>
                </div>
            </div>
            <div className="flex items-center h-10 gap-4 self-end">
                <div className="flex flex-col h-full justify-between ">
                    <div className="skeleton h-4 w-20 bg-slate-600/50"></div>
                    <div className="skeleton h-4 w-28 bg-slate-600/50"></div>
                </div>
                <div className="skeleton h-10 aspect-square shrink-0 rounded-full bg-slate-800/60"></div>
            </div>
            <div className="flex items-center h-10 gap-4">
                <div className="skeleton h-10 aspect-square shrink-0 rounded-full bg-slate-800/60"></div>
                <div className="flex flex-col h-full justify-between ">
                    <div className="skeleton h-4 w-20 bg-slate-600/50"></div>
                    <div className="skeleton h-4 w-28 bg-slate-600/50"></div>
                </div>
            </div>
            <div className="flex items-center h-10 gap-4 self-end">
                <div className="flex flex-col h-full justify-between ">
                    <div className="skeleton h-4 w-20 bg-slate-600/50"></div>
                    <div className="skeleton h-4 w-28 bg-slate-600/50"></div>
                </div>
                <div className="skeleton h-10 aspect-square shrink-0 rounded-full bg-slate-800/60"></div>
            </div>
            <div className="flex items-center h-10 gap-4">
                <div className="skeleton h-10 aspect-square shrink-0 rounded-full bg-slate-800/60"></div>
                <div className="flex flex-col h-full justify-between ">
                    <div className="skeleton h-4 w-20 bg-slate-600/50"></div>
                    <div className="skeleton h-4 w-28 bg-slate-600/50"></div>
                </div>
            </div>
            <div className="flex items-center h-10 gap-4 self-end">
                <div className="flex flex-col h-full justify-between ">
                    <div className="skeleton h-4 w-20 bg-slate-600/50"></div>
                    <div className="skeleton h-4 w-28 bg-slate-600/50"></div>
                </div>
                <div className="skeleton h-10 aspect-square shrink-0 rounded-full bg-slate-800/60"></div>
            </div>
        </div >
    );
};

export default MessagesSkeleton;
