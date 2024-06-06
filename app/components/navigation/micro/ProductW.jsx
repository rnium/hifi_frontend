'use client';
// Product at wishlist
import React from 'react';
import { Stack, Box, Paper, Chip, Typography, Zoom } from '@mui/material';
import Link from 'next/link';


export function ProductW({ product }) {
    const product_link = "/product/" + product.slug;
    return (
        <Stack className='border rounded' direction="row" sx={{px: 2, py: 1}} alignItems="center">
            <Stack justifyContent="center">
                <Link href={product_link}>
                    <img src={product.banner} alt="" width="100px" />
                </Link>
            </Stack>
            <Stack alignItems="center" spacing={1}>
                <Box flexGrow={1}>
                    <Link href={product_link}>
                        <Typography
                            sx={{ textAlign: "center", fontSize: '0.8rem' }}
                            gutterBottom
                            variant="caption"
                            component="div"
                        >
                            {product.title}
                        </Typography>

                    </Link>
                </Box>
            </Stack>
        </Stack>
    )
}

export default ProductW;