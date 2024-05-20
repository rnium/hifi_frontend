import React from 'react';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import Product from '../utils/Product';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { products } from '@/lib/data';
import Link from 'next/link';

const ProductSection = (props) => {
    return (
        <section style={{ margin: '2rem 0' }} className='product-section'>
            <Stack direction="row" alignItems="center" justifyContent='space-between'>
                <Divider textAlign='left' variant='middle' sx={{flexGrow: 1}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        {props.icon}
                        <Typography variant='h5' component='h5' color="secondary">{props.title}</Typography>
                    </Stack>
                </Divider>
                <Link href="#" className='section-view-link'>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant='body1' component='h5' color="text.secondary">View All</Typography>
                        <ArrowForwardIcon className='arrow' color='primary' />
                    </Stack>
                </Link>
            </Stack>
            {/* <Divider sx={{ mt: 1 }} variant='middle' /> */}
            <Grid container sx={{ mt: 0 }} spacing={3}>
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