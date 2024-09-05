'use client';

import { Stack, Button } from '@mui/material';
import { useAddToCartWithMessage } from '@/hooks/useCart';



const ProductAction = ({ product }) => {
    const addtoCart = useAddToCartWithMessage();
    return (
        <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ pt: 3 }}
        >
            <Button
                variant="contained"
                sx={{ px: {xs: 2, md: 6} }}
            >
                Buy Now
            </Button>
            <Button
                onClick={() => addtoCart(product.id)}
                variant="outlined"
                sx={{ px: {xs: 2, md: 6} }}
            >
                Add To Cart
            </Button>
        </Stack >
    )
}

export default ProductAction