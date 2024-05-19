import React from 'react';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import Product from '../utils/Product';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductSection = () => {
    return (
        <section style={{ margin: '2rem 0' }}>
            <Stack direction="row" justifyContent='space-between'>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <TrendingUpIcon color='primary' fontSize='large' />
                    <Typography variant='h5' component='h5' color="primary">Trending Products</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant='body1' component='h5' color="text.secondary">View All</Typography>
                    <ArrowForwardIcon color='primary' />
                </Stack>
            </Stack>
            <Divider sx={{ mt: 1 }} />
            <Grid container sx={{ mt: 2 }}>
                <Grid item xs={12} md={4} lg={3}>
                    <Product />
                </Grid>
            </Grid>
        </section>
    )
}

export default ProductSection