"use client"
import { useState } from 'react';
import { Stack, Badge, IconButton, Typography, Menu, Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { products } from '@/lib/data';
import ProductW from './micro/ProductW';

const cursorTypography = {
    cursor: 'pointer'
}

const Shoppingbtn = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = event => {
        setAnchorEl(null);
    }


    return (
        <>
            <Stack sx={{ flexGrow: 0 }} onHover={handleClick} onClick={handleClick} alignItems="center" direction="row">
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
                onClose={handleClose}
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
                <Box sx={{width: {xs: '250px', md: '350px'}}} className='p-3'>
                    <Stack spacing={1} >
                        {
                            products.map(p => (
                                <ProductW product={p} />
                            ))
                        }
                    </Stack>
                </Box>
            </Menu>
            <Stack sx={{ flexGrow: 0, ml: 3 }} alignItems="center" direction="row">
                <IconButton>
                    <Badge badgeContent={1} color="primary" variant='dot'>
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
                <Stack>
                    <Typography variant='body2'>My Cart</Typography>
                    <Typography color="primary" variant='body2' fontSize="0.7rem">৳ 1200</Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default Shoppingbtn;