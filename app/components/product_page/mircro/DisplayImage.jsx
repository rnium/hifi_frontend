'use client';

import { useState, useEffect, Fragment } from 'react';
import { Image as AntdImage } from 'antd';
import { Box, Stack, Skeleton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Thumbs } from 'swiper/modules';

const DisplayImage = ({ images, inModal }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [selectedImage, setSelectedImage] = useState(images[0]?.id);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return (
            <Fragment>
                <Box>
                    <img alt='cover' src={images[0]?.url || '/images/no_data.webp'} width="100%" />
                </Box>
                <Stack sx={{ mt: 1 }} direction="row" spacing={2}>
                    {
                        images.slice(0, 4).map((i, idx) => (
                            <Skeleton animation="wave" key={`skeleton-${idx}`} variant='rounded' width={90} height={90} />
                        ))
                    }
                </Stack>
            </Fragment>
        )
    }
    return (
        <Fragment>
            <Box>
                {
                    inModal ?
                    <img alt='cover' src={images.filter(io => io.id === selectedImage)[0]?.url || '/images/no_data.webp'} width="100%" />
                    : <AntdImage src={images.filter(io => io.id === selectedImage)[0]?.url || '/images/no_data.webp'} />
                }
            </Box>
            <Stack sx={{ mt: 1 }} direction="row" spacing={1} alignItems="center" justifyContent="center" className='image-slider'>
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
                        images.map((img, idx) => (
                            <SwiperSlide className='mySwiperSlide' key={idx}>
                                <Box onClick={() => setSelectedImage(img.id)} className={selectedImage === img.id ? "slide-img-container active" : "slide-img-container"}>
                                    <img alt={`photo-${idx}`} src={img.url} width={100} height={100} />
                                </Box>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Stack>
        </Fragment>
    )
}

export default DisplayImage;