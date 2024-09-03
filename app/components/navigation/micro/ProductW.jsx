'use client';
// Product at wishlist
import React from 'react';
import { Stack, Box, Paper, Chip, Typography, Zoom, Card, CardMedia, CardContent } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { RiCloseLine, RiShoppingCartLine } from '@remixicon/react';
import { api_host } from '@/lib/data';


export function ProductW({ product, handleRemove }) {
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
            {/* <Image 
                src={`${api_host}${product.cover}`}
                width={80}
                height={80}
            /> */}

            <CardMedia
                component="img"
                sx={{ width: 80, height: 80 }}
                image={`${api_host}${product.cover}`}
                alt={product.title}
            />


            <Stack sx={{ px: 1, py: 3 }}>
                <Typography variant="caption" >
                    <Link href={product_link} className='hover:text-sky-800'>
                        {product.title}
                    </Link>
                </Typography>
                <Stack direction="row" sx={{ mt: 1 }} spacing={1}>
                    <button className='shoppinglist-btn success'>
                        <RiShoppingCartLine
                            size={15}
                            className='icon'
                        />
                        <div className="text">Add to Cart</div>
                    </button>
                    <button
                        className='shoppinglist-btn danger'
                        onClick={handleRemove}
                    >
                        <RiCloseLine
                            size={15}
                            className='icon'
                        />
                        <div className="text">Remove</div>
                    </button>
                </Stack>
            </Stack>

        </Card>
    )
}

export default ProductW;