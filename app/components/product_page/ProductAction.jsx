'use client';

import { useState, Fragment } from 'react';
import { Stack, Button, Box, Tooltip, Typography } from '@mui/material';
import { InputNumber } from 'antd';



const ProductAction = ({ product }) => {
    // const [selectedColor, setSelectedColor] = useState(product?.product_colors[0].code)
    return (
        <Fragment>
            {/* <Stack direction="row" spacing={2} alignItems="center" sx={{pb: 1}}>
                <Typography variant='body1' color="text.secondary">Product Colors</Typography>
                {
                    product.product_colors.map((c, idx) => (
                        <Tooltip key={idx} title={c.color_name} placement='top' arrow>
                            <div onClick={() => setSelectedColor(c.code)} className={selectedColor == c.code ? "color-box active" : "color-box"} style={{ backgroundColor: c.code }}></div>
                        </Tooltip>
                    ))
                }
            </Stack> */}
            <Stack direction="row" spacing={2} alignItems="center" sx={{pt: 3}}>
                <Button variant="contained" sx={{ px: 6 }}>Buy Now</Button>
                <Button variant="outlined" sx={{ px: 5 }}>Add To Cart</Button>
            </Stack >
        </Fragment>
    )
}

export default ProductAction