import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';
const LogoutButton = () => {
  //calling useLogout hook which will give us loding state and logout function
  const {loading, logout}= useLogout();
  return (
    <div className='mt-auto'>
      {!loading ? (<BiLogOut className='w-6 h-6 text-white cursor-pointer'
      onClick={logout}
      />):(
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogoutButton
