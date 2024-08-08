'use client'

import { useState } from 'react';
import CheckoutPageSkeleton from '../skeletons/CheckoutPageSkeleton';
import {
    Stack, Box, Paper, Button, Typography, TextField, Switch, Grid, Container,
    FormControl, FormControlLabel, InputLabel, Select, MenuItem
} from '@mui/material';
import ProductCheckout from '../utils/ProductCheckout';
import { useCart, useAddToCart, useRemoveFromCart } from '@/hooks/useCart';
import { checkout_informations } from '@/lib/data';
import './styles/style.css'

const shipping_cost = 120;

const CheckOutPage = () => {
    const { cartInfo, prodData, totalAmount, totalItems, serverSynced } = useCart();
    const addToCart = useAddToCart();
    const { removeProduct, decrementFromCart } = useRemoveFromCart();
    const [createAccount, setCreateAccount] = useState(true);

    if (!serverSynced) {
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

                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={10}
                                    label="Location"
                                    onChange={() => { console.log("hola") }}
                                    variant='filled'
                                >
                                    <MenuItem value={10}>Sylhet City</MenuItem>
                                    <MenuItem value={20}>Outside Sylhet City</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <TextField
                                label="Billing Address"
                                variant='filled'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Switch
                                    checked={createAccount}
                                    onClick={() => setCreateAccount(prevState => !prevState)}
                                />}
                                label="Create Account (Optional)"
                            />
                        </Grid>
                        {
                            createAccount ?
                                <>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Password"
                                            variant='filled'
                                            type='password'
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Retype Password"
                                            variant='filled'
                                            type='password'
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant='outlined'>Signup and Continue Checkout</Button>
                                    </Grid>
                                </> : null
                        }
                        <Grid
                            item
                            xs={12}
                            mx={1.5}
                            mt={2}
                        >
                            <ul
                                style={{
                                    listStyleType: 'circle'
                                }}
                            >
                                {
                                    checkout_informations.map((info, idx) => (
                                        <li key={idx}>{info}</li>
                                    ))
                                }
                            </ul>
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