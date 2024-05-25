'use client';
import { useEffect, useState } from 'react';
import { Box, IconButton, Stack, Skeleton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Thumbs } from 'swiper/modules';


const ImageSlider = ({ images }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [selectedImage, setSelectedImage] = useState(images[0]?.id);
    
    useEffect(() => {
        setIsMounted(true);
    })

    if (!isMounted) {
        return (
            <Stack sx={{mt: 1}} direction="row" spacing={2}>
                {
                    images.slice(0, 4).map((i, idx) => (
                        <Skeleton animation="wave" key={`skeleton-${idx}`} variant='rounded' width={90} height={90} />
                    ))
                }
            </Stack>
        )
    }
    return (
        <Stack sx={{mt: 1}} direction="row" spacing={1} alignItems="center" justifyContent="center" className='image-slider'>
            <Swiper
                slidesPerView={5}
                spaceBetween={8}
                freeMode={true}
                pagination={{
                    clickable: false,

                }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
            >
                {
                    images.map(i => (
                        <SwiperSlide>
                            <Box onClick={() => setSelectedImage(i.id)} className={selectedImage === i.id ? "slide-img-container active": "slide-img-container"}>
                                <img width="100px" src={i.url} className='w-full' />
                            </Box>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </Stack>
    )
}

export default ImageSlider