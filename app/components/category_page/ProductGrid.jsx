import React from 'react';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import ProductY from '../utils/ProductY';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { products } from '@/lib/data';
import Link from 'next/link';

const ProductGrid = (props) => {
    return (
        <section className='product-section'>
            <Grid container spacing={2}>
                {
                    products.map(p => (
                        <Grid item key={p.id} xs={12} md={4} lg={3}>
                            <ProductY product={p} />
                        </Grid>
                    ))
                }
            </Grid>
        </section>
    )
}

export default ProductGrid;