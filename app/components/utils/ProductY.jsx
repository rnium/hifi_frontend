import React from 'react';
import {
    Stack, Tooltip, Card, CardContent, CardMedia, Typography, Zoom,
    Chip, Divider, Box
} from '@mui/material';
import './styles/style.css';
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { product1 } from '@/lib/dev_data';


const ProductY = ({ product }) => {
    return (
        <Card className='product-y rounded-md' >
            <CardMedia
                component="img"
                alt={product.title}
                image={product.cover}
            />
            <div className="actions">
                <Stack spacing={2}>
                    <Tooltip arrow title="Add To Wishlist" TransitionComponent={Zoom} placement="left">
                        <div className='action-btn'>
                            <FavoriteBorderIcon fontSize='small' />
                        </div>
                    </Tooltip>
                    <Tooltip arrow title="Get A Glimpse" TransitionComponent={Zoom} placement="left">
                        <div className='action-btn'>
                            <VisibilityIcon fontSize='small' />
                        </div>
                    </Tooltip>
                    <Tooltip arrow title="Share This Item" TransitionComponent={Zoom} placement="left">
                        <div className='action-btn'>
                            <ShareIcon fontSize='small' />
                        </div>
                    </Tooltip>
                </Stack>
            </div>
            <CardContent sx={{ minHeight: '340px', display: 'flex', flexDirection: 'column' }}>
                <Link href={`/product/${product.slug}`} className='product-link'>
                    <Typography
                        sx={{ textAlign: "center", fontSize: '0.9rem', flexGrow: 1 }}
                        className='product-title'
                        gutterBottom
                        variant="h6"
                        component="div"
                    >
                        {product.title.substring(0, 70) + (product.title.length > 70 ? "..." : '')}
                    </Typography>
                    <Divider sx={{ my: 1 }} variant='middle' />
                    <Box flexGrow={1}>
                        <ul>
                            {
                                product.key_features.slice(0,6).map((f, idx) => (
                                    <li key={idx}>
                                        <Typography
                                            variant='caption'
                                            color="text.secondary"
                                        >
                                            {f}
                                        </Typography>
                                    </li>
                                ))
                            }
                        </ul>
                    </Box>
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mt: 2 }}
                    >
                        {
                            product.priceSale ?
                                <>
                                    <Typography
                                        sx={{ textAlign: "center", fontSize: { xs: '0.9rem', md: '1rem' } }}
                                        className='product-price'
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        color="primary"
                                    >
                                        {product.priceSale.toLocaleString("en-IN")} Tk
                                    </Typography>
                                    <Typography
                                        sx={{ textAlign: "center", textDecoration: 'line-through', fontSize: { xs: '0.8rem', md: '0.9rem' } }}
                                        className='product-price'
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        color="text.secondary"
                                    >
                                        {product.price.toLocaleString("en-IN")} Tk
                                    </Typography>
                                </> :
                                <Typography
                                    sx={{ textAlign: "center", fontSize: { xs: '0.9rem', md: '1rem' } }}
                                    className='product-price'
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    color="primary"
                                >
                                    {product.price.toLocaleString("en-IN")} Tk
                                </Typography>
                        }
                    </Stack>
                </Link>
                <Stack sx={{ px: 3 }}>
                    <Chip sx={{ mt: 1, py: 1 }} onClick={() => { console.log('hello'); }} color='primary' size='small' label="Buy Now" />
                </Stack>
            </CardContent>


        </Card>
    )
}

export default ProductY;