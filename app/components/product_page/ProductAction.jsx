'use client';

import { useState } from 'react';
import { Stack, Button } from '@mui/material';
import { InputNumber } from 'antd';

const ProductAction = () => {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <Button variant="contained" sx={{px: 6}}>Buy Now</Button>
            <Button variant="outlined" sx={{px: 5}}>Add To Cart</Button>
        </Stack >
    )
}

export default ProductAction