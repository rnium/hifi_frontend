import React from 'react';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import Product from '../utils/Product';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { products } from '@/lib/data';
import Link from 'next/link';
import { product_section_icon_mapping } from '@/lib/data';

const ProductSection = ({section_data}) => {
    return (
        <section style={{ margin: '2rem 0' }} className='product-section'>
            <Stack direction="row" alignItems="center" justifyContent='space-between'>
                <Divider textAlign='left' variant='middle' sx={{flexGrow: 1}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        {product_section_icon_mapping[section_data.slug]}
                        <Typography variant='h5' component='h5' color="secondary">{section_data.title}</Typography>
                    </Stack>
                </Divider>
            </Stack>
            {/* <Divider sx={{ mt: 1 }} variant='middle' /> */}
            <Grid container sx={{ mt: 0 }} spacing={3}>
                {
                    section_data.products.map(p => (
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