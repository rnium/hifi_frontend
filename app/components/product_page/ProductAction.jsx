'use client';

import { Stack, Button } from '@mui/material';
import { useAddToCartWithMessage } from '@/hooks/useCart';
import { useAddToWishlistWithMessage } from '@/hooks/useWishList';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { RiHeartAdd2Line } from '@remixicon/react';



const ProductAction = ({ product }) => {
    const addtoCart = useAddToCartWithMessage();
    const addToWishlist = useAddToWishlistWithMessage();
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
                onClick={() => addtoCart(product.id)}
                startIcon={<AddShoppingCartIcon />}
            >
                Add To Cart
            </Button>
            <Button
                variant="outlined"
                sx={{ px: {xs: 2, md: 6} }}
                onClick={() => addToWishlist(product.id)}
                startIcon={<RiHeartAdd2Line />}

            >
                Add To Wishlist
            </Button>
        </Stack >
    )
}

export default ProductAction