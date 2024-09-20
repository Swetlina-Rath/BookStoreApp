import React from 'react'
import { useState,useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import Slider from "react-slick";
import List from "../..//public/List.json"
import Card from './Card';
function Freebook() {
  const [book,setbook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:4100/book")
        console.log(res.data.filter((data)=>data.category === 'Free'))
        setbook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])
    const filterData = book.filter((data)=>data.category === 'Free');
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div><h1 className='font-semibold text-xl'>
        Free Courses Offered
      </h1>
      <p>
        A variety of Free books are available here containing fantastic experience and real life scenarios
      </p>
      </div>
    <div >
    <Slider {...settings}>
       {filterData.map((item)=>(
        <Card item={item} key = {item.id}/>
       ))}
      </Slider>
      </div>
    </div>
    </>
  )
}

export default Freebook
