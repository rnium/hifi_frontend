"use client";
import {useEffect, useState} from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import Spinner from '../utils/Spinner';


const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const HomepageCarousel = () => {
    const [isMounted, setIsMounted] = useState(false);
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    useEffect(() => {
        setIsMounted(true);
    }, [])
    if (!isMounted) {
        return <Spinner py={20} />;
    }
    return (
        <div className='carousel'>
            <Carousel afterChange={onChange}  autoplay>
                <div className='carousel-item'>
                    <img width="100%" src="https://i.ibb.co/RPXn3zm/cover-web.webp" alt="Asus ROG" />
                </div>
                <div className='carousel-item'>
                    <img width="100%" src="https://i.ibb.co/0FrdQyQ/slider-2.webp" alt="Asus ROG" />
                </div>
            </Carousel>
        </div>
    )
}

export default HomepageCarousel;