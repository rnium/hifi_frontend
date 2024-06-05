"use client";
import { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import Spinner from '../utils/Spinner';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';


const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

import "swiper/css";
import "swiper/css/pagination";



const HomepageCarousel = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 3000,
            }}
            pagination={{
                el: '.pagination',
                clickable: true
            }}
            className='myswiper'

        >
            <SwiperSlide>
                <img width="100%" src="https://i.ibb.co/RPXn3zm/cover-web.webp" alt="Asus ROG" />
            </SwiperSlide>
            <SwiperSlide>
                <img width="100%" src="https://i.ibb.co/0FrdQyQ/slider-2.webp" alt="Asus ROG" />
            </SwiperSlide>
            <SwiperSlide>
                <img width="100%" src="https://i.ibb.co/0FrdQyQ/slider-2.webp" alt="Asus ROG" />
            </SwiperSlide>
            <div className="pagination"></div>
        </Swiper>
    )
}

export default HomepageCarousel;