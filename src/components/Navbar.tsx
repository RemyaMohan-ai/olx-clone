import Loginpop from './login'
import {logout} from '../firebase/setup'
import { useAuth } from "../context/AuthContext";

import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";


// import search from '../assets/search.jpg'
// import down from '../assets/down.png'
// import lens from '../assets/lens.png'
// import wish from '../assets/wish.png'
import logo from "/logo.svg";
import { useState } from 'react';

type searchtype={
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({setSearch}:searchtype) => {
  const[pop,setPop] = useState(false)
  const[user , setUser] =useState(null)
  const[dropdown , setDropdown] =useState(false)


  return (
    <div className='bg-stone-100 relative w-screen'>
      <div className='flex m-4'>
      <img src= {logo} alt="" className='w-17 h-17 '/>
      <div className='flex border-2 rounded-xs p-2 w-64 border-black ml-5 h-12 mb-0 mt-2'>
        <CiSearch  className='w-9 h-7  ' ></CiSearch>
        <input type="text" name="" id="" placeholder='location' className='border-0 ml-3 text-black focus:outline-none focus:ring-0'/>
        <FaAngleDown  className='w-10 h-5 m-1' ></FaAngleDown>
      </div>
      <div className='flex border-2 rounded-xs  w-160 border-black ml-5 mt-2 h-12 mb-0 relative'>
        <input type="text" name="" id="" onChange={(e)=>setSearch(e.target.value)} placeholder='Search cars, proporties, laptops' className='border-0 p-2 w-[92%] text-black focus:outline-none'/>
        <div className='bg-gray-800 h-full w-[8%]'>
        <FaSearch className='text-white w-9 h-6 m-auto mt-2'></FaSearch>
        </div>

      </div>
      <div className=' h-11 w-30 flex  m-3 cursor-pointer '>
        <h1 className='pt-2 text-gray-800 font-semibold text-base'>ENGLISH</h1>
        <FaAngleDown  className='w-8 h-6 mt-2 ml-2 ' ></FaAngleDown>

      </div>
      <div className='flex mt-2 '>
     
      <CiHeart className='w-7 h-9 m-2'></CiHeart>

      {/* {user ? (
//  <CgProfile></CgProfile>
<div className="relative group">
      <CgProfile className="w-10 h-10 cursor-pointer" onClick={()=>setDropdown(!dropdown)} />
{dropdown&& <div >
        <ul className="py-2 text-gray-700">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer ">Profile</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
          <li onClick={()=>logout()} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
        </ul>
      </div>}
     
    </div>

) : (
  <h1  onClick={()=>setPop(!pop)} className=' h-9 m-3 text-gray-900 font-semibold text-base underline hover:cursor-pointer'>Login</h1>    

)} */}
 {user ? (
        <div className="flex items-center space-x-4">
          <CgProfile className="w-10 h-10 cursor-pointer" onClick={()=>setDropdown(!dropdown)} />

          <button onClick={async()=>{logout();
            setUser(null)
          }} className="px-4 py-2 bg-red-500 text-white rounded">
            Logout
          </button>
        </div>
      ) : (
        <h1  onClick={()=>setPop(!pop)} className=' h-9 m-3 text-gray-900 font-semibold text-base underline hover:cursor-pointer'>Login</h1>    

      )}
      
      <div className='w-25 h-11 ml-10  inset-0 rounded-full border bg-gradient-to-r from-yellow-400 via-cyan-400 to-blue-500 relative'>
        <div className=' absolute p-1.5'>
        <h1 className='w-21 p-0.5 pl-4 border  border-white rounded-full bg-white'>+Sell</h1>   
        </div>
      </div>
      </div>

    </div>
    {pop && <Loginpop setPop ={setPop} setUser={setUser}/>}
    
    
    </div>
  )
}

export default Navbar
