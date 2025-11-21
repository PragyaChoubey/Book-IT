import React, { useEffect, useState } from 'react'
import axios from'axios'
import Card from '../Component/UI/Card'
import { NavLink } from 'react-router-dom'

const Category = () => {

const url="https://api.itbook.store/1.0/search/react"

//react,web,data,javascript,python,AI,mongodb

const [menu ,setMenu]=useState([])

const data= async()=>{

    try {
   const result = await axios.get(url)
console.log(result.data.books)
setMenu(result.data.books)
   
} catch (error) {
  console.log(error)  
}
}
useEffect(()=>{
data();
},[])



  return (
  <div>
    <h1 className='text-black text-lg mt-2 md:text-2xl text-center'>“Explore React Books”</h1>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 place-items-center ">
      
      {
        menu.map((curElem)=>{
       return   <Card   key={curElem.isbn13} menuData={curElem}/>
        })
      }
    </ul>
    <NavLink to="/Home" className="flex justify-center">
    <button className='px-4 py-2  text-gray-500 shadow-md flex justify-center rounded-md bg-orange-200  transition cursor-pointer ml-10 mt-10'> Go Home...</button>
    </NavLink>
</div>
   
  )
}

export default Category
