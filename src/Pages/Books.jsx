import React from 'react'
import Typewriter from 'typewriter-effect';

import { NavLink } from 'react-router-dom';
const Books = () => {
  return (
   <div className="p-6 ">
     <h1 className='text-center  font-bold text-2xl  md:text-3xl mb-5 '>Books Category</h1>
      <p className="text-black text-lg mt-2 md:text-2xl text-center">
     <Typewriter
  options={{
    strings: ['Explore your', 'favourite genres',' and collections'],
    autoStart: true,
    loop: true,
    
  }}
/>
</p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-30 md:ml-20 mt-10">
  
    {/* Card 1 */}
    <NavLink to="/Category"><div className=" p-9 rounded-xl h-85 w-auto md:w-70 md:h-90 bg-[#FFFFFF]   shadow-md shadow-[#A7795B40 rounded-2xl border border-[#E8DCC5]  duration-300 hover:shadow-2xl hover:shadow-pink-200 hover:-translate-y-2 cursor-pointer">
      <img
        className="w-50 mx-auto h-70 sm:h-72 md:h-70 object-cover rounded-lg "
        src="https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UF1000,1000_QL80_.jpg"
        alt=""
      />
    </div>
    </NavLink>

    {/* Card 2 */}
    <NavLink to="/Web">
    <div className=" p-9 rounded-xl  h-85 w-auto md:w-70 md:h-90 bg-[#FFFFFF] shadow-md shadow-[#A7795B40 rounded-2xl border border-[#E8DCC5]  duration-300 hover:shadow-2xl hover:shadow-pink-200 hover:-translate-y-2 cursor-pointer ">
      <img
        className="w-50 mx-auto h-70 sm:h-72 md:h-70 object-cover rounded-lg "
        src="https://m.media-amazon.com/images/I/818dhKbYMLL._UF1000,1000_QL80_.jpg"
        alt=""
      />
    </div>
    </NavLink>

    {/* Card 3 */}
    <NavLink to="/Js">
    <div  className=" p-9 rounded-xl  h-85 w-auto md:w-70 md:h-90 bg-[#FFFFFF] shadow-md shadow-[#A7795B40 rounded-2xl border border-[#E8DCC5]  duration-300 hover:shadow-2xl hover:shadow-pink-200 hover:-translate-y-2 cursor-pointer ">
      <img
        
        className="w-50 mx-auto h-70 sm:h-72 md:h-70 object-cover rounded-lg "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMYK8vtn1WrOdr6earm8ff6GFUB8Fw5wuZQ&s"
        alt=""
      />
    </div>
</NavLink>
    {/* Card 4 */}
    <NavLink to="/Python">
    <div  className=" p-9 rounded-xl  h-85 w-auto md:w-70 md:h-90 bg-[#FFFFFF] shadow-md shadow-[#A7795B40 rounded-2xl border border-[#E8DCC5]  duration-300 hover:shadow-2xl hover:shadow-pink-200 hover:-translate-y-2 cursor-pointer ">
      <img
    
        className="w-50 mx-auto h-70 sm:h-72 md:h-70 object-cover rounded-lg "
        src="https://m.media-amazon.com/images/I/61ViPUXS8ZL.jpg"
        alt=""
      />
    </div>
</NavLink>
    {/* Card 5 */}
    <NavLink to="/Ai">
    <div  className=" p-9 rounded-xl  h-85 w-auto md:w-70 md:h-90 bg-[#FFFFFF] shadow-md shadow-[#A7795B40 rounded-2xl border border-[#E8DCC5]  duration-300 hover:shadow-2xl hover:shadow-pink-200 hover:-translate-y-2 cursor-pointer ">
      <img
        
        className="w-50 mx-auto h-70 sm:h-72 md:h-70 object-cover rounded-lg "
        src="https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-5028-0"
        alt=""
      />
    </div>
    </NavLink>

    {/* Card 6 */}
    <NavLink to="/Mongodb">
    <div  className=" p-9 rounded-xl  h-85 w-auto md:w-70 md:h-90 bg-[#FFFFFF] shadow-md shadow-[#A7795B40 rounded-2xl border border-[#E8DCC5]   duration-300 hover:shadow-2xl hover:shadow-pink-200 hover:-translate-y-2 cursor-pointer">
      <img
    
        className="w-50 mx-auto h-70 sm:h-72 md:h-70 object-cover rounded-lg "
        src="https://m.media-amazon.com/images/I/61hTt8G9QBL._AC_UF1000,1000_QL80_.jpg"
        alt=""
      />
    </div>
</NavLink>
  </div>
</div>
  

  )
}

export default Books
