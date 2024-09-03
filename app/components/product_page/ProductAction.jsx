'use client';

import { Stack, Button, Tooltip, Zoom, IconButton } from '@mui/material';
import { useAddToCartWithMessage } from '@/hooks/useCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAddToWishlistWithMessage } from '@/hooks/useWishList';



const ProductAction = ({ product }) => {
    const addtoCart = useAddToCartWithMessage();
    const add2wishlist = useAddToWishlistWithMessage();
    return (
        <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 3 }}>
            <Button variant="contained" sx={{ px: 6 }}>Buy Now</Button>
            <Button
                onClick={() => addtoCart(product.id)}
                variant="outlined"
                sx={{ px: 5 }}
            >
                Add To Cart
            </Button>
            <Tooltip arrow title="Add To Wishlist" TransitionComponent={Zoom} placement="right">
                <IconButton onClick={() => add2wishlist(product.id)}>
                    <FavoriteBorderIcon />
                </IconButton>
            </Tooltip>
        </Stack >
    )
}

export default ProductAction