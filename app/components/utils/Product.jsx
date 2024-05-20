import React from 'react';
import { Stack, Tooltip, Card, CardContent, CardMedia, Typography, Zoom } from '@mui/material';
import './styles/style.css';
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = ({ product }) => {
    return (
        <Card className='product'>
            <CardMedia
                component="img"
                alt="green iguana"
                image={product.banner}
            />
            {
                product.discount > 0 ?
                    <div className="discount">
                        <Typography variant='body1' sx={{ fontSize: { xs: '0.8rem' } }} component="span">Save {product.discount}৳</Typography>
                    </div> : null
            }
            <div className="actions">
                <Stack spacing={2}>
                    <Tooltip arrow title="Add To Cart" TransitionComponent={Zoom} placement="left">
                        <div className='action-btn'>
                            <AddShoppingCartIcon fontSize='small' />
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
            <Link href="#" className='product-link'>
                <CardContent sx={{minHeight: '140px', display: 'flex', flexDirection: 'column'}}>
                    <Typography
                        sx={{ textAlign: "center", fontSize: '0.8rem', flexGrow: 1 }}
                        className='product-title'
                        gutterBottom
                        variant="h6"
                        component="div"
                    >
                        {product.title}
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mt: 1 }}
                    >
                        <Typography
                            sx={{ textAlign: "center", fontSize: { xs: '0.8rem', md: '1rem' } }}
                            className='product-price'
                            gutterBottom
                            variant="h6"
                            component="div"
                            color="primary"
                        >
                            {product.price - product.discount} Tk
                        </Typography>
                        {
                            product.discount > 0 ?
                                <Typography
                                    sx={{ textAlign: "center", textDecoration: 'line-through', fontSize: { xs: '0.7rem', md: '0.9rem' } }}
                                    className='product-price'
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    color="text.secondary"
                                >
                                    {product.price} Tk
                                </Typography> : null
                        }
                    </Stack>
                </CardContent>
            </Link>

        </Card>
    )
}

export default Product