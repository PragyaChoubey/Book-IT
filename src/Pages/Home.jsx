import React from 'react'
import Menu from './Menu'
import Books from './Books'

const Home = () => {
  return (
    <div className=' w-full '>
     <div className='relative'>
      <img className=' w-auto h-60 md:h-130 md:w-full' src="https://static.vecteezy.com/system/resources/previews/036/594/620/non_2x/ai-generated-book-store-advertisment-background-with-copy-space-free-photo.jpg" />
       <h1 className="absolute top-1/2 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   text-white text-2xl md:text-5xl font-bold text-center px-2">
         “Explore the World of IT Books”
         </h1>
     </div>
     <div>
      <Menu/>
     </div>
     <Books/>
    
    
  </div>
  )
}

export default Home
