import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <form className='flex item-center gap-2'>
        <input type="text" placeholder='Search..' className='input input-bordered rounded-full'/>
        <button type='submit'className='btn btn-circle bg-sky-200 text-white'>
        <FaSearch className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput