import { ReduxProvider } from '@/redux/store';
import React from 'react';
import { Stack, Tooltip, Card, CardContent, CardMedia, Typography, Zoom } from '@mui/material';
import './styles/style.css';
import Link from 'next/link';
import ProductHoverActions from './ProductHoverActions';

const Product = ({ product }) => {
    return (
        <Card className='product'>
            <CardMedia
                component="img"
                alt={product.title}
                image={product.cover}
            />
            {
                product.discount > 0 ?
                    <div className="discount">
                        <Typography variant='body1' sx={{ fontSize: { xs: '0.8rem' } }} component="span">Save {product.discount}৳</Typography>
                    </div> : null
            }
            <div className="actions">
                <ReduxProvider>
                    <ProductHoverActions product={product} />
                </ReduxProvider>
            </div>
            <Link href={`/product/${product.slug}`} className='product-link'>
                <CardContent sx={{ minHeight: '140px', display: 'flex', flexDirection: 'column' }}>
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
                            sx={{ textAlign: "center", fontSize: { xs: '0.9rem', md: '1rem' } }}
                            className='product-price'
                            gutterBottom
                            variant="h6"
                            component="div"
                            color="primary"
                        >
                            {new Number(product.price - product.discount).toLocaleString('en-IN')} Tk
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
                                    {product.price.toLocaleString('en-IN')} Tk
                                </Typography> : null
                        }
                    </Stack>
                </CardContent>
            </Link>

        </Card>
    )
}

export default Product