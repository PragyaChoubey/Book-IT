import React from 'react'

// import Home from './Home'
import { Outlet, useNavigation } from 'react-router-dom'

import Header from '../Pages/Header'
import Footer from '../Pages/Footer'

const AppLayout = () => {

const navigation =useNavigation()
console.log(navigation);

if(navigation.state === "loading") return <Loading/>

  return (<>
    
    <Header/>
     <Outlet/>    
    <Footer/>
    </>
  )
}

export default AppLayout