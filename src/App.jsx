import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Router/AppLayout'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Category from './Pages/Category'
import Web from './Pages/Web'
import Ai from './Pages/Ai'
import Mongodb from'./Pages/Mongodb'
import Js from'./Pages/Js'
import Python from './Pages/Python'
import BookDetails from "./Pages/BookDetails";

const App = () => {
 
  const router=createBrowserRouter([
{

path:"/",
element:<AppLayout/>,

children:[
{
path:"/About",
element:<About/>
},

{
path:"/Home",
element:<Home/>
},

{
path:"/",
element:<Home/>
},


 {
  path: "/Home/:category",   // ⭐ Fix
  element: <Category />
},


{
path:"/Contact",
element:<Contact/>
},
{
  path:"/Category",
  element:<Category/>
},
{
path:"/Web",
element:<Web/>
}
,
{
path:"/Ai",
element:<Ai/>
},
{
  path:"/Mongodb",
  element:<Mongodb/>
},
{
path:"/Js",
element:<Js/>
},
{
  path:"/Python",
  element:<Python/>
},
{
  path: "/book/:isbn13",
  element: <BookDetails />
}



  ]}
  ])

  return (
    <>
  
     <RouterProvider router={router}/>
     {/* <Category/> */}
   </>
  )
}
export default App
