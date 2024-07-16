"use client";

import { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import Spinner from '../utils/Spinner';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';


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



const HomepageCarousel = ({ carousel_data }) => {
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
            {
                carousel_data.map((car, idx) => (
                    <SwiperSlide key={idx} >
                        {
                            car?.site_link ?
                                <Link href={car.site_link}>
                                    <img width="100%" src={car.banner} alt={`Carousel ${idx + 1}`} />
                                </Link> :
                                <img width="100%" src={car.banner} alt={`Carousel ${idx + 1}`} />
                        }
                    </SwiperSlide>
                ))
            }

            <div className="pagination"></div>
        </Swiper>
    )
}

export default HomepageCarousel;