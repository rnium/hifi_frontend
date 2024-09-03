"use client"
import { useCallback } from 'react';
import ProductW from './micro/ProductW';
import { Stack, Typography, Menu, Box } from '@mui/material';
import { Empty } from 'antd';
import { useAddToCartWithMessage } from '@/hooks/useCart';
import { useRemoveFromWishlist } from '@/hooks/useWishList';


const WishListMenu = ({
    anchorEl,
    products,
    handleWishlistClose
}) => {
    const open = Boolean(anchorEl);
    const remove = useRemoveFromWishlist();
    const add2cart = useAddToCartWithMessage();
    const addToCartThenRemove = useCallback(id => {
        add2cart(id);
        remove(id);
        
    }, [add2cart, remove])
    return (
        <>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleWishlistClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                disableAutoFocus
            >
                <Box sx={{ width: { xs: '250px', md: '350px' } }} className='p-3'>
                    <Typography sx={{ textAlign: 'center' }}>My Wishlist</Typography>
                    <Typography
                        variant='caption'
                        sx={{ textAlign: 'center', mb: 1 }}
                        component="div"
                        color="text.secondary"
                    >
                        {products.length} Items
                    </Typography>
                    {
                        products.length == 0 ?
                            <Stack
                                sx={{ py: 5 }}
                            >
                                <Empty
                                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                                    description={
                                        <Typography>Empty Wishlist</Typography>
                                    }
                                />
                            </Stack>
                            :
                            <Stack spacing={1} >
                                {
                                    products.map((p, idx) => (
                                        <ProductW
                                            key={idx}
                                            product={p}
                                            addtocart={addToCartThenRemove}
                                            handleRemove={() => remove(p.id)}
                                        />
                                    ))
                                }
                            </Stack>

                    }
                </Box>
            </Menu>
        </>
    )
}

export default WishListMenu;