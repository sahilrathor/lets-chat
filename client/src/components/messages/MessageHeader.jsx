import React from 'react'

const MessageHeader = ({value}) => {
  return (
    <div className="bg-primary/80 px-4 py-3 rounded-bl-md flex gap-3  items-center select-none">
                <div className="avatar">
                    <div className="ring-green-400 ring-2 ring-offset-slate-900 w-9 rounded-full ring-offset-1">
                        <img src={value.profilepic} draggable='false' />
                    </div>
                </div>
                <span className="label-text text-slate-100 font-semibold tracking-wide flex flex-col gap-0">
                    <p className=' leading-4'>{value.fullName}</p>
                    {/* <span className='text-xs font-normal text-slate-300 leading-3'>{value.userName}</span> */}
                </span>
            </div>
  )
}

export default MessageHeader