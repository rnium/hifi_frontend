import React from 'react';
import { Stack, Tooltip, Card, CardContent, CardMedia, Typography, Zoom, 
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
                image={product.banner}
            />
            <div className="actions">
                <Stack spacing={2}>
                    <Tooltip arrow title="Add To Cart" TransitionComponent={Zoom} placement="left">
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
                <Link href="#" className='product-link'>
                    <Typography
                        sx={{ textAlign: "center", fontSize: '0.9rem', flexGrow: 1 }}
                        className='product-title'
                        gutterBottom
                        variant="h6"
                        component="div"
                    >
                        {product.title.substring(0, 70) + (product.title.length > 70 ? "..." : '')}
                    </Typography>
                    <Divider sx={{my: 1}} variant='middle' />
                    <Box flexGrow={1}>
                        <ul>
                            {
                                product1.key_features.map((f, idx) => (
                                    <li>
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
                        <Typography
                            sx={{ textAlign: "center", fontSize: { xs: '0.9rem', md: '1rem' } }}
                            className='product-price'
                            gutterBottom
                            variant="h6"
                            component="div"
                            color="primary"
                        >
                            {new Number(product.price - product.discount).toLocaleString("en-IN")} Tk
                        </Typography>
                        {
                            product.discount > 0 ?
                                <Typography
                                    sx={{ textAlign: "center", textDecoration: 'line-through', fontSize: { xs: '0.8rem', md: '0.9rem' } }}
                                    className='product-price'
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    color="text.secondary"
                                >
                                    {product.price.toLocaleString("en-IN")} Tk
                                </Typography> : null
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