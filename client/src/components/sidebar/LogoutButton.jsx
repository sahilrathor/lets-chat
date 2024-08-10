import React from 'react'
import {BiLogOut} from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {
  const {logout, isLoading} = useLogout();
  

  return (
    <div onClick={logout} className="p-1 text-white cursor-pointer opacity-50 hover:opacity-100 bg-rose-700 hover:bg-rose-600 inline-block  font-bold rounded-md absolute top-5 right-7 hovered">
        <BiLogOut className='h-7 w-7'/>
        <div className="badge badge-neutral border-r font-medium border-white/50 bg-slate-900/60 p-1 absolute right-1/2 top-3/4 rounded-sm show-hover hidden">logout</div>
    </div>
  )
}

export default LogoutButton