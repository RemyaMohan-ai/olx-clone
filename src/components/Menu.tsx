import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

type menuType={

  setMenu: React.Dispatch<React.SetStateAction<string>>

}
const Menu = ({setMenu}:menuType) => {
  return (
    <div className='border-b-2 border-zinc-100'>
      <div className='h-10 flex mr-25 ml-25 p-2.5'>
        <button onClick={()=>setMenu("")} className='flex hover:cursor-pointer' >ALL CATEGORIES
        <FaAngleDown className='ml-2 text-xl'/>        
        </button>
        <ul className='flex text-sm p-.1 hover:cursor-pointer '>
            <li className='ml-5' onClick={()=>setMenu("cars")}>Cars</li>
            <li className='ml-5' onClick={()=>setMenu("men's clothing")}>Motorcycle</li>
            <li className='ml-5' onClick={()=>setMenu("electronics")}>Mobile Phones</li>
            <li className='ml-5' onClick={()=>setMenu("cars")}>For Sale: House & Apartments</li>
            <li className='ml-5' onClick={()=>setMenu("men's clothing")}>Scooters</li>
            <li className='ml-5' onClick={()=>setMenu("jewelery")}>Commercial & Other Vehicles </li>
            <li className='ml-5' onClick={()=>setMenu("electronics")}>For Rent: Houses & Apartments</li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
