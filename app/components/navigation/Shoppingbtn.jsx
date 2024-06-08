"use client"
import { useState } from 'react';
import { Stack, Badge, IconButton, Typography, Menu, Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { products } from '@/lib/data';
import ProductW from './micro/ProductW';
import CartDrawer from './CartDrawer';

const cursorTypography = {
    cursor: 'pointer'
};

const all_products = [products[0], products[2], products[1]]

const Shoppingbtn = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const open = Boolean(anchorEl);

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
            <Stack sx={{ flexGrow: 0 }} onClick={handleWishlistClick} alignItems="center" direction="row">
                <IconButton>
                    <Badge badgeContent={0} color="primary" variant='dot'>
                        <FavoriteBorderIcon />
                    </Badge>
                </IconButton>
                <Typography style={cursorTypography} variant='body2'>Wishlist</Typography>
            </Stack>
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
            >
                <Box sx={{ width: { xs: '250px', md: '350px' } }} className='p-3'>
                    <Typography sx={{ textAlign: 'center' }}>My Wishlist</Typography>
                    <Typography
                        variant='caption'
                        sx={{ textAlign: 'center', mb: 1 }}
                        component="div"
                        color="text.secondary"
                    >
                        3 Items
                    </Typography>
                    <Stack spacing={1} >

                        {
                            all_products.map(p => (
                                <ProductW product={p} />
                            ))
                        }
                    </Stack>
                </Box>
            </Menu>
            <Stack sx={{ flexGrow: 0, ml: 3 }} onClick={handleCartClick} alignItems="center" direction="row">
                <IconButton>
                    <Badge badgeContent={1} color="primary" variant='dot'>
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
                <Stack style={cursorTypography}>
                    <Typography variant='body2' >My Cart</Typography>
                    <Typography color="primary" variant='body2' fontSize="0.7rem">৳ 1200</Typography>
                </Stack>
            </Stack>
            <CartDrawer open={drawerOpen} setOpen={setDrawerOpen} />
        </>
    )
}

export default Shoppingbtn;