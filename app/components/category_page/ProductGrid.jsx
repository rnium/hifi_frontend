import React from 'react';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import ProductY from '../utils/ProductY';
import Image from 'next/image';
import no_data from '@/public/images/no_data.svg';

const ProductGrid = ({products}) => {
    if (products.length == 0) {
        return (
            <Stack
                alignItems='center'
                sx={{py: 5}}
                spacing={2}
            >
                <Image src={no_data} width={500} alt='No Products' />
                <Typography
                    variant='h5'
                    color='primary'
                >
                    No Products
                </Typography>
            </Stack>
        )
    }
    return (
        <section className='product-section'>
            <Grid container spacing={2}>
                {
                    products.map(p => (
                        <Grid item key={p.id} xs={12} md={4}>
                            <ProductY product={p} />
                        </Grid>
                    ))
                }
            </Grid>
        </section>
    )
}

export default ProductGrid;