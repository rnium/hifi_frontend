'use client'

import React from 'react';
import { Stack, Tooltip, Zoom } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { setQuickviewProduct } from '@/redux/homepageReducer';
import { useAddToCart } from '@/hooks/useCart';


const ProductHoverActions = ({ product, showWishlist }) => {
    const addToCart = useAddToCart();
    const dispatch = useDispatch();
    const handleGlimpseClick = (e) => {
        dispatch(setQuickviewProduct(product.slug));
    }
    return (
        <Stack spacing={2}>
            {
                showWishlist ?
                    <Tooltip arrow title="Add To Wishlist" TransitionComponent={Zoom} placement="left">
                        <div className='action-btn'>
                            <FavoriteBorderIcon fontSize='small' />
                        </div>
                    </Tooltip> :
                    <Tooltip arrow title="Add To Cart" TransitionComponent={Zoom} placement="left">
                        <div className='action-btn' onClick={() => addToCart(product.id)}>
                            <AddShoppingCartIcon fontSize='small' />
                        </div>
                    </Tooltip>
            }
            <Tooltip arrow title="Get A Glimpse" TransitionComponent={Zoom} placement="left">
                <div className='action-btn' onClick={handleGlimpseClick}>
                    <VisibilityIcon fontSize='small' />
                </div>
            </Tooltip>
            <Tooltip arrow title="Share This Item" TransitionComponent={Zoom} placement="left">
                <div className='action-btn'>
                    <ShareIcon fontSize='small' />
                </div>
            </Tooltip>
        </Stack>
    )
}

export default ProductHoverActions;