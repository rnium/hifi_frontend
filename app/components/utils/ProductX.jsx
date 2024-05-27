'use client';

import React from 'react';
import { Stack, Box, Paper, Chip, Typography, Zoom } from '@mui/material';
import './styles/style.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Link from 'next/link';

const Product = ({ product }) => {
    const product_link = "/product/" + product.slug;
    return (
        <Paper sx={{ mb: 1, px: 2, py: 1.5 }} elevation={2}>
            <Stack direction="row">
                <Stack justifyContent="center">
                    <Link href={product_link}>
                        <img src={product.banner} alt="" width="200px" />
                    </Link>
                </Stack>
                <Stack alignItems="center" sx={{ minHeight: '110px' }}>
                    <Link href={product_link}>
                        <Typography
                            sx={{ textAlign: "center", fontSize: '0.8rem', flexGrow: 1 }}
                            className='product-title'
                            gutterBottom
                            variant="h6"
                            component="div"
                        >
                            {product.title}
                        </Typography>

                    </Link>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Add to cart" size='small' variant='outlined' color='primary' />
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mt: 1 }}
                    >
                        <Typography
                            sx={{ textAlign: "center", fontSize: { xs: '0.9rem', md: '1rem' } }}
                            className='product-price'
                            gutterBottom
                            variant="h6"
                            component="div"
                            // color="primary"
                        >
                            {product.price - product.discount} Tk
                        </Typography>
                        {
                            product.discount > 0 ?
                                <Typography
                                    sx={{ textAlign: "center", textDecoration: 'line-through', fontSize: { xs: '0.8rem', md: '0.9rem' } }}
                                    className='product-price'
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    color="text.secondary"
                                >
                                    {product.price} Tk
                                </Typography> : null
                        }
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default Product