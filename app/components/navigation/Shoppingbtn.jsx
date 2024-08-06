"use client"
import { useState } from 'react';
import { Stack, Badge, IconButton, Typography, Menu, Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ProductW from './micro/ProductW';
import { Empty } from 'antd';
import CartDrawer from './CartDrawer';
import { useCart } from '@/hooks/useCart';

const cursorTypography = {
    cursor: 'pointer'
};


const Shoppingbtn = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const open = Boolean(anchorEl);

    const { cartInfo, prodData, totalAmount, totalItems } = useCart()

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
                    <Badge badgeContent={0} color="primary" variant='dot'>
                        <FavoriteBorderIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    onClick={handleCartClick}
                >
                    <Badge badgeContent={0} color="primary" variant='dot'>
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
                    <Badge badgeContent={0} color="primary" variant='dot'>
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
                    <Badge badgeContent={0} color="primary" variant='dot'>
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
                <Stack style={cursorTypography}>
                    <Typography variant='body2' color="text.primary">My Cart</Typography>
                    <Typography color="primary" variant='body2' fontSize="0.7rem">৳ {totalAmount.toLocaleString('en-in')}</Typography>
                </Stack>
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
                        0 Items
                    </Typography>
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
                    {/* <Stack spacing={1} >

                        {
                            all_products.map((p, idx) => (
                                <ProductW key={idx} product={p} />
                            ))
                        }
                    </Stack> */}
                </Box>
            </Menu>
            <CartDrawer
                open={drawerOpen}
                setOpen={setDrawerOpen}
                cartInfo={cartInfo}
                prodData={prodData}
                totalAmount={totalAmount}
                totalItems={totalItems}
            />
        </>
    )
}

export default Shoppingbtn;