import React from 'react';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import Product from '../utils/Product';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { products } from '@/lib/data';
import Link from 'next/link';

const ProductSection = () => {
    return (
        <section style={{ margin: '2rem 0' }} className='product-section'>
            <Stack direction="row" justifyContent='space-between'>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <TrendingUpIcon color='primary' fontSize='large' />
                    <Typography variant='h5' component='h5' color="primary">Trending Products</Typography>
                </Stack>
                <Link href="#" className='section-view-link'>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant='body1' component='h5' color="text.secondary">View All</Typography>
                        <ArrowForwardIcon className='arrow' color='primary' />
                    </Stack>
                </Link>
            </Stack>
            <Divider sx={{ mt: 1 }} variant='middle' />
            <Grid container sx={{ mt: 0 }} spacing={2}>
                {
                    products.map(p => (
                        <Grid item key={p.id} xs={12} md={4} lg={3}>
                            <Product product={p} />
                        </Grid>
                    ))
                }
            </Grid>
        </section>
    )
}

export default ProductSection