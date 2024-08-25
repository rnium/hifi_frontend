import React from 'react'
import { Grid, Skeleton } from '@mui/material'
import Product from '../skeletons/Product'

const ProductsSkeleton = ({num}) => {
    const skel_arr = Array.from({length: num}, (v, i) => 0+i)
    return (
        <Grid container spacing={2}>
            {
                skel_arr.map(id => (
                    <Grid key={id} item xs={12} md={4}>
                        <Product />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default ProductsSkeleton