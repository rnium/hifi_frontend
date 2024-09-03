"use client"
import { useState } from 'react';
import { Stack, Badge, IconButton, Typography, Menu, Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartDrawer from './CartDrawer';
import { useCart } from '@/hooks/useCart';
import { useWishList } from '@/hooks/useWishList';
import WishListMenu from './WishlistMenu';

const cursorTypography = {
    cursor: 'pointer'
};


const Shoppingbtn = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { products } = useWishList();
    const { cartInfo, prodData, totalAmount, totalItems } = useCart();

    const handleWishlistClick = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleWishlistClose = event => {
        setAnchorEl(null);
    }

    const handleCartClick = event => {
        setDrawerOpen(true);
    }


    return (
        <>
            <Stack
                direction='row'
                spacing={1}
                sx={{ display: { xs: 'flex', md: 'none' } }}
            >
                <IconButton
                    onClick={handleWishlistClick}
                >
                    <Badge badgeContent={products.length} color="primary" variant='dot'>
                        <FavoriteBorderIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    onClick={handleCartClick}
                >
                    <Badge badgeContent={totalItems} color="primary" variant='dot'>
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
            </Stack>
            <Stack
                sx={{
                    flexGrow: 0,
                    display: { xs: 'none', md: 'flex' }
                }}
                onClick={handleWishlistClick}
                alignItems="center"
                direction="row"
            >
                <IconButton>
                    <Badge badgeContent={products.length} color="primary" variant='dot'>
                        <FavoriteBorderIcon />
                    </Badge>
                </IconButton>
                <Typography style={cursorTypography} color="text.primary" variant='body2'>Wishlist</Typography>
            </Stack>
            <Stack
                sx={{
                    flexGrow: 0,
                    ml: 3,
                    display: { xs: 'none', md: 'flex' }
                }}
                onClick={handleCartClick}
                alignItems="center"
                direction="row"
            >
                <IconButton>
                    <Badge badgeContent={totalItems} color="primary" variant='dot'>
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
                <Stack style={cursorTypography}>
                    <Typography variant='body2' color="text.primary">My Cart</Typography>
                    <Typography color="primary" variant='body2' fontSize="0.7rem">৳ {totalAmount.toLocaleString('en-in')}</Typography>
                </Stack>
            </Stack>
            <WishListMenu
                anchorEl={anchorEl}
                products={products}
                handleWishlistClose={handleWishlistClose}
            />
            <CartDrawer
                open={drawerOpen}
                setOpen={setDrawerOpen}
                cartInfo={cartInfo}
                prodData={prodData}
                totalAmount={totalAmount}
                totalItems={totalItems}
                disableAutoFocus
            />
        </>
    )
}

export default Shoppingbtn;