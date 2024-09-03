'use client'

import { message } from 'antd';
import { useState, useEffect } from 'react';
import { Stack, Tooltip, Zoom } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { setQuickviewProduct } from '@/redux/homepageReducer';
import { useAddToCartWithMessage } from '@/hooks/useCart';
import { useAddToWishlistWithMessage } from '@/hooks/useWishList';


const ProductHoverActions = ({ product, showWishlist }) => {
    const [hostname, setHostname] = useState(null);
    const [protocol, setProtocol] = useState(null);
    const [port, setPort] = useState(null);
    const addToCart = useAddToCartWithMessage();
    const addToWList = useAddToWishlistWithMessage();
    const dispatch = useDispatch();

    const handleGlimpseClick = (e) => {
        dispatch(setQuickviewProduct(product.slug));
    }

    const handleShareClick = async () => {
        const prodUrl = `${protocol}//${hostname}${port ? `:${port}` : ''}/product/${product.slug}`
        await navigator.clipboard.writeText(prodUrl);
        message.info("Product Link Copied to Clipboard", 5);
    }

    useEffect(() => {
        if (window != undefined) {
            setHostname(window.location.hostname);
            setProtocol(window.location.protocol);
            setPort(window.location.port);
        }
    }, [])

    return (
        <Stack spacing={2}>
            {
                showWishlist ?
                    <Tooltip arrow title="Add To Wishlist" TransitionComponent={Zoom} placement="left">
                        <div className='action-btn' onClick={() => addToWList(product.id)}>
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
                <div className='action-btn' onClick={handleShareClick}>
                    <ShareIcon fontSize='small' />
                </div>
            </Tooltip>
        </Stack>
    )
}

export default ProductHoverActions;