import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

type Productlist ={
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}
type prodprop ={
    product:Productlist[],
    search: string,
    menu:string

}

const Products = ({product ,search,menu}:prodprop) => {

  return (
    <div className='grid grid-cols-4  gap-5 p-5 ml-20 mr-20'>
      {product
      .filter((data)=> search? data.title.toLowerCase().includes(search.toLowerCase())
      : data.category.toLowerCase().includes(menu.toLowerCase()))
      .map((data)=>{
        return <Link key={data.id} to ={`/details/${data.id}`}> <div  className="bg-white border border-gray-300 shadow-md p-5 rounded-lg">
            <img src={data.image} alt="" className='w-60 h-48 ml-3 mt-3'/>
            <h1 className='font-bold text-xl mt-5'>$ {data.price}</h1>
            <h1>{data.title}</h1>
            <h1>{data.category}</h1>
        </div></Link>
      })}
    </div>
  )
}

export default Products
