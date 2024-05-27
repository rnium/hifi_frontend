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
        <Paper sx={{ mb: 1, px: 2, py: 2 }} elevation={0} className='border'>
            <Stack direction="row">
                <Stack justifyContent="center">
                    <Link href={product_link}>
                        <img src={product.banner} alt="" width="200px" />
                    </Link>
                </Stack>
                <Stack alignItems="center" sx={{ minHeight: '120px' }} spacing={1}>
                    <Box flexGrow={1}>
                        <Link href={product_link}>
                            <Typography
                                sx={{ textAlign: "center", fontSize: '0.8rem' }}
                                className='hover:text-red-700 hover:underline'
                                gutterBottom
                                variant="h6"
                                component="div"
                            >
                                {product.title}
                            </Typography>

                        </Link>
                    </Box>

                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography
                            sx={{ textAlign: "center", fontSize: { xs: '0.9rem', md: '1rem' } }}
                            className='product-price'
                            gutterBottom
                            variant="h6"
                            component="div"
                            flexGrow={1}
                        >
                            {new Number(product.price - product.discount).toLocaleString('en-IN')} Tk
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
                                    {new Number(product.price).toLocaleString('en-IN')} Tk
                                </Typography> : null
                        }
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Chip sx={{ px: 1 }} icon={<AddShoppingCartIcon />} label="Add to cart" size='small' variant='outlined' color='primary' />
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default Product