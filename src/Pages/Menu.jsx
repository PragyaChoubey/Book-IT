import React, { useEffect, useState} from 'react'
import axios from'axios'
 import Card from '../Component/UI/Card'
// import {getMenuData}  from '../Service/getService';

import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";



const Menu = () => {
  
  const API="https://api.itbook.store/1.0/new"
  

  const [data,setData]=useState([])
  

const getMenuData= async()=>{
 
 try {
  const res = await axios.get(API)
  console.log(res.data.books);
  setData(res.data.books)
 } catch (error) {
  console.log(error);
 }
}

useEffect(()=>{
getMenuData();
},[])


  return (
    <>
    <h1 className='text-center font-bold text-2xl  md:text-3xl mb-2 mt-5'>"New Arrivals"</h1>
  <div className="p-6"> 
        <Swiper
          modules={[ Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          spaceBetween={20}
          // slidesPerView={1}

          // Responsive breakpoints
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >

 {data.map((curElem) => (
            <SwiperSlide key={curElem.isbn13}>
              <Card menuData={curElem} />
            </SwiperSlide>
          ))}

 
  </Swiper>
   
   </div> 
</>


  )
}

export default Menu
