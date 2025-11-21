import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsList } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
const Header = () => {

    const [menu,openMenu]=useState(false);
    const[showMenu,setShowMenu]=useState(true);

    return (
        <div className="flex items-center justify-between  px-10 py-4 text-black shadow-md">
            <div className='flex items-center'>
                <img className='md:w-15 md:h-15 w-10 h-10 ' src="https://static.vecteezy.com/system/resources/thumbnails/048/115/578/small/3d-stack-of-books-and-mortarboard-school-library-education-concept-back-to-school-concept-3d-render-illustration-png.png" />
                    <h1 className=' text-2xl md:text-3xl' >BookIT</h1>
            </div>

            <div className={`${menu ? "block fixed top-0 right-0 bg-amber-50 h-full  bg-opacity-90 w-1/2  shadow-lg z-50 p-10" : "hidden"} 
      md:flex md:static  md:bg-transparent md:w-auto md:h-auto md:p-0 md:shadow-none 
      font-semibold text-center rounded-xl  transition-all duration-500`}>
        <ul className="flex flex-col md:flex-row gap-3 md:gap-10">
                <li><NavLink to="/Home">Home</NavLink></li>
               <li><NavLink to="/About" >About</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
            {showMenu?(
  <BsList size={30} className='md:hidden absolute  right-10 top-6 z-50 transition-all duration-300 cursor-pointer' onClick={()=>{
    openMenu(!menu); setShowMenu(!showMenu);}} />
): (<RxCross1 size={20} className='md:hidden fixed right-10 top-6 z-50 transition-all duration-300 cursor-pointer'onClick={()=>{
    openMenu(!menu); setShowMenu(!showMenu);}} />)}
        </div>
    )
}

export default Header
//#D4B996FF
//Big headline: “Explore the World of IT Books”

//Subtext: “Find the latest programming, AI, and tech books — all in one place.”