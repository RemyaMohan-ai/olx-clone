import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";


import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
  }
const Details = () => {
    const {id} = useParams()
    const [product ,setProduct] = useState<Product | null>(null);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
      .then((data) => setProduct(data));
    },[id])
    if(!product) return <h1>loading...</h1>
  return (<>
    
  <div className='m-30  ' >
      <div className=" grid grid-cols-5" >
        <div className='col-span-3 flex justify-center border border-gray-300 mr-10 bg-white ' >      
          <img src={product.image} alt="" className="w-80 h-80 p-5" />
        </div>
        <div  className='col-span-2 h-40 border border-gray-300 '>
          <div className='p-4'>
          <div className='flex justify-between'>
          <h1 className="text-3xl text-gray-700 font-bold w-40 h-10">${product.price}</h1>
          <div className='flex '>
          <CiHeart className=' text-2xl ml-5'></CiHeart>
          <IoMdShare  className=' text-2xl ml-5'></IoMdShare>
          </div>
          </div>
          <h2 className="text-xl text-gray-600 pt-4">{product.title}</h2>
          </div>

        </div>
      </div>
      <div className='w-[57%] border border-gray-300  mt-4 p-4 mr-4 '>
      
        <h2 className="text-xl text-gray-600 ">Category : <span className='font-light'>{product.category}</span></h2>
        <h1 className="mt-5 font-lg text-gray-600">Description</h1>
        <p className=' text-sm font-extralight text-gray-600 pt-4'>{product.description} </p>
        
      </div>
      

  </div>
  </>)
}

export default Details
