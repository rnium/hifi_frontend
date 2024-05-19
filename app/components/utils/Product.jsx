import React from 'react';
import { Stack, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Product = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://www.ryans.com/storage/products/small/lenovo-legion-slim-5i-16irh8-intel-core-i5-13500h-11709715097.webp"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Lenovo Legion Slim 5i
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lenovo Legion Slim 5i 16IRH8 Intel Core i5 13500H 16GB RAM, 512GB SSD 16 Inch 2.5K QHD WQXGA Display Storm Grey Gaming Laptop
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Product