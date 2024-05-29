import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  //conversation array is giving all the list of users
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search)return;
    if(search.length<3){
      return toast.error("search term must be atleat 3 characters long");
    }

    //normal search algorithm
    const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
       setSelectedConversation(conversation);
       setSearch('');
    }else{
       toast.error("No user found with such name");
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex item-center gap-2'>
        <input type="text" placeholder='Search..' className='input input-bordered rounded-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit'className='btn btn-circle bg-sky-200 text-white'>
        <FaSearch className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput
