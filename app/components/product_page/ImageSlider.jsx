'use client';
import { useEffect, useState } from 'react';
import { Grid, Box, IconButton, Stack } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Thumbs } from 'swiper/modules';


const ImageSlider = ({ images }) => {
    // const slides = sliceImages(images);
    const [selectedImage, setSelectedImage] = useState(images[0].id)
    return (
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" className='image-slider'>
            <Swiper
                slidesPerView={5}
                spaceBetween={8}
                pagination={{
                    clickable: false,

                }}
                modules={[Mousewheel, Thumbs]}
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