import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col' >
    <SearchInput/>
    <div className='divider px3'></div>
    <Conversations/>
    {/* <Conversation/> */}
    <LogoutButton/>
    </div>
  )
}

export default Sidebar
