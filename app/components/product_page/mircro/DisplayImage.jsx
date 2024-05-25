'use client';

import { useState, useEffect } from 'react';
import { Image } from 'antd';
import { Box } from '@mui/material';

const DisplayImage = ({images}) => {
    const [isMounted, setIsMounted] = useState(false);

    // useEffect(() => {
    //     setIsMounted(true);
    // }, [])

    if (!isMounted) {
        return (
            <Box>
                <img src={images[0]?.url || '/images/no_data.webp'} width="100%" />
            </Box>
        )
    }
    return (
        <Box>
            <Image
                src='https://www.ryans.com/storage/products/main/lenovo-legion-slim-5i-16irh8-intel-core-i5-13500h-11709715097.webp'
            />
        </Box>
    )
}

export default DisplayImage;