'use client';
// Product at wishlist
import React from 'react';
import { Stack, Box, Paper, Chip, Typography, Zoom, Card, CardMedia, CardContent } from '@mui/material';
import Link from 'next/link';
import { RiShoppingCartLine } from '@remixicon/react';


export function ProductW({ product }) {
    const product_link = "/product/" + product.slug;
    return (
        <Card
            className='rounded shadow-lg border-t border-l transition-all hover:shadow-xl'
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            elevation={0}
        >
            <CardMedia
                component="img"
                sx={{ width: 80, height: 80 }}
                image={product.banner}
                alt={product.title}
            />

            <Stack sx={{ px: 1, py: 3 }}>
                <Typography variant="caption" >
                    <Link href={product_link} className='hover:text-sky-800'>
                        {product.title}
                    </Link>
                </Typography>
                <Stack direction="row" sx={{mt: 1}}>
                    <button className='shoppinglist-btn'>
                        <RiShoppingCartLine 
                            size={15}
                            className='icon'
                        />
                        <div className="text">Add to Cart</div>
                    </button>
                </Stack>
            </Stack>

        </Card>
    )
}

export default ProductW;