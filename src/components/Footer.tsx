import React from 'react'

import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import appstore from '../assets/appstore.webp'
import playstore from '../assets/playstore.webp'
import cartrade from '../assets/cartrade_tech.svg'
import carwale from '../assets/carwale.svg'
import olx from '../assets/olx.svg'
import bikewale from '../assets/bikewale.svg'

const Footer = () => {
  return (
    <div>
    <div className='mt-20 flex ml-20 mr-20 mb-4 '>
      <ul className='ml-20 '>
        <h1 className='font-semibold  text-gray-800 mb-3'>POPULAR LOCATION</h1>
        <li className=' text-xs text-gray-600 mb-2'>kolkate</li>
        <li className=' text-xs text-gray-600 mb-2'>Mumbai</li>
        <li className=' text-xs text-gray-600 mb-2'>Chennai</li>
        <li className=' text-xs text-gray-600 mb-2'>Pune</li>
        <li className=' text-xs text-gray-600 mb-2'>Cochi</li>
      </ul>
      <ul className='ml-20'>
        <h1 className='font-semibold text-gray-800  mb-3'>TRENDING LOCATION</h1>
        <li className=' text-xs text-gray-600 mb-2'>Bhuvaneshwar</li>
        <li className=' text-xs text-gray-600 mb-2'>Hyderbad</li>
        <li className=' text-xs text-gray-600 mb-2'>Chandigarh</li>
        <li className=' text-xs text-gray-600 mb-2'>Nashik</li>
      </ul>
      <ul className='ml-20'>
        <h1 className='font-semibold  text-gray-800  mb-3'>ABOUT US</h1>
        <li className=' text-xs text-gray-600 mb-2'>Tech@OLX</li>
        
      </ul>
      <ul className='ml-20'>
        <h1 className='font-semibold  text-gray-800  mb-3'>OLX</h1>
        <li className=' text-xs text-gray-600 mb-2'>Blog</li>
        <li className=' text-xs text-gray-600 mb-2'>Help</li>
        <li className=' text-xs text-gray-600 mb-2'>Sitemap</li>
        <li className=' text-xs text-gray-600 mb-2' >Legal & Privacy information</li>
        <li className=' text-xs text-gray-600 mb-2'>Vulnerability Dislcosure Program</li>
      </ul>
      <div>
      <div className="flex border-t border-b border-t-gray-700 border-b-gray-700 h-15 w-80 justify-between items-center">
      <p className='text-gray-700 text-lg'>Follow Us</p>
            <div className='flex'>
            <CiFacebook className='ml-5 font-extrabold text-xl text-gray-600'/>
            <FaInstagram className='ml-5 font-extrabold text-xl text-gray-600'/>
            <BsTwitter className='ml-5 font-extrabold text-xl text-gray-600'/>
            <AiOutlineYoutube className='ml-5 font-extrabold text-xl text-gray-600'/>
            </div>
        </div>
        <div className='flex  mt-4'>
            <img src={playstore} alt="" className='w-40 h-10' />
            <img src={appstore} alt="" className='w-40  h-10 ml-1' />

        </div>
      </div>
      
    </div>
    <div className='bg-sky-950 grid grid-cols-4 gap-10 p-8 h-80'>
        <img src={cartrade} alt=""className='h-50 w-40 ' />
        <img src={olx} alt="" className='h-20 w-40  mt-13 pr-7 border-r-2 border-r-white' />
        <img src={carwale} alt="" className='h-50 w-40  '/>
        <img src={bikewale} alt=""className='h-50 w-30 ' />
        <p className='text-white h-5 overflow-y-hidden'>Help - Sitemap</p>
    </div>
    </div>
  )
}

export default Footer
