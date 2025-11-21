import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Card = ({menuData}) => {
    
  const{image,isbn13}=menuData;


  return (

<Link to={`/book/${menuData.isbn13}`}>
   <li className=' bg-[#FFFFFF] shadow-md shadow-[#A7795B40 rounded-2xl border border-[#E8DCC5] w-70'>
     
    <div className="flex flex-col h-full p-3">
       
        <div>
            <img className='w-full h-60 sm:h-72 md:h-80 object-cover rounded-xl'  src={image} alt={isbn13} />
             <h3  className=" text-base mt-2 sm:text-lg font-semibold  text-gray-800 text-center line-clamp-1" >{menuData.title}</h3>
        </div>
    </div>
   </li>
  </Link>
  
  
  )
}

export default Card

