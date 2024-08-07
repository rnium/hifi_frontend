'use client'

import React from 'react';
import CheckoutPageSkeleton from '../skeletons/CheckoutPageSkeleton';
import {
    Stack, Box, Paper, Button, Typography, TextField, Zoom, Grid, Container
} from '@mui/material';
import ProductCheckout from '../utils/ProductCheckout';
import { useCart, useAddToCart, useRemoveFromCart } from '@/hooks/useCart';

const shipping_cost = 120;

const CheckOutPage = () => {
    const { cartInfo, prodData, totalAmount, totalItems, success } = useCart();
    const addToCart = useAddToCart();
    const { removeProduct, decrementFromCart } = useRemoveFromCart()
    if (!success) {
        return <CheckoutPageSkeleton />
    }
    return (
        <Container
            sx={{
                my: 5
            }}
        >
            <Typography
                variant='h4'
            >
                Checkout Cart
            </Typography>
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                    xs={12}
                    md={7}
                >
                    <Typography
                        variant='h6'
                        color='text.secondary'
                        sx={{ my: 1 }}
                    >
                        Billing Info
                    </Typography>
                    {/* <Stack
                        spacing={2}
                    >
                        {
                            prodData.map((p, idx) => (
                                <ProductCheckout
                                    key={idx}
                                    product={p}
                                    cartInfo={cartInfo}
                                    addToCart={addToCart}
                                    removeProduct={removeProduct}
                                    decrementFromCart={decrementFromCart}
                                />
                            ))
                        }
                    </Stack> */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="First Name"
                                variant='filled'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Last Name"
                                variant='filled'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Phone"
                                variant='filled'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                variant='filled'
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Billing Address"
                                variant='filled'
                                fullWidth
                            />
                        </Grid>

                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5}
                >
                    <Paper
                        sx={{ p: 3, borderRadius: 5 }}
                        elevation={0}
                    >
                        <Typography
                            variant='h6'
                            sx={{ my: 1 }}
                        >
                            Order Summary
                        </Typography>
                        <Stack sx={{ my: 1 }} spacing={1} >
                            {
                                prodData.map((p, idx) => (
                                    <ProductCheckout
                                        key={idx}
                                        product={p}
                                        cartInfo={cartInfo}
                                        addToCart={addToCart}
                                        removeProduct={removeProduct}
                                        decrementFromCart={decrementFromCart}
                                    />
                                ))
                            }
                        </Stack>
                        <Stack
                            sx={{
                                backgroundColor: '#f2e9e4',
                                borderRadius: '5px',
                                p: 2,
                                mt: 2
                            }}
                        >
                            <Stack
                                direction='row'
                                justifyContent='space-between'
                            >
                                <Typography>Total Items</Typography>
                                <Typography>{totalItems}</Typography>
                            </Stack>
                            <Stack
                                direction='row'
                                justifyContent='space-between'
                            >
                                <Typography color='text.secondary'>Sub Total</Typography>
                                <Typography>৳ {totalAmount.toLocaleString('en-in')}</Typography>
                            </Stack>
                            <Stack
                                direction='row'
                                justifyContent='space-between'
                            >
                                <Typography color='text.secondary'>Shipping Fee</Typography>
                                <Typography>৳ {shipping_cost.toLocaleString('en-in')}</Typography>
                            </Stack>
                            <Stack
                                direction='row'
                                justifyContent='space-between'
                                sx={{ borderTop: '1px dashed gray', pt: 1, mt: 2 }}
                            >
                                <Typography >Total</Typography>
                                <Typography>৳ {(totalAmount + shipping_cost).toLocaleString('en-in')}</Typography>
                            </Stack>
                        </Stack>
                        <Button
                            variant='contained'
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Confirm Order
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>

    )
}

export default CheckOutPage;