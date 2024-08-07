import React from 'react';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import Product from '../utils/Product';
import ProductX from '../utils/ProductX';

import { product_section_icon_mapping } from '@/lib/data';

const ProductSection = ({ section_data, show_x }) => {
    return (
        <section style={{ margin: '2rem 0' }} className='product-section'>
            <Divider textAlign='left' variant='middle'>
                <Stack direction="row" alignItems="center" spacing={1}>
                    {product_section_icon_mapping[section_data.slug]}
                    <Typography variant='h5' component='h5' color="primary">{section_data.title}</Typography>
                </Stack>
            </Divider>
            {/* <Divider sx={{ mt: 1 }} variant='middle' /> */}
            <Grid container sx={{ mt: show_x ? 2 : 1 }} spacing={show_x ? 1 : 3}>
                {
                    section_data.products.map(p => (
                        <Grid item key={p.id} xs={12} md={6} lg={show_x ? 4 : 3}>
                            {
                                show_x ? <ProductX product={p} /> : <Product product={p} />
                            }
                        </Grid>
                    ))
                }
            </Grid>
        </section>
    )
}

export default ProductSection