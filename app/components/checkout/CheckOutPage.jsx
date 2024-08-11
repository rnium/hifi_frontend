'use client'

import { useState } from 'react';
import CheckoutPageSkeleton from '../skeletons/CheckoutPageSkeleton';
import {
    Stack, Box, Paper, Button, Typography, TextField, Switch, Grid, Container,
    FormControl, FormControlLabel, InputLabel, Select, MenuItem
} from '@mui/material';
import ProductCheckout from '../utils/ProductCheckout';
import { useCart, useAddToCart, useRemoveFromCart } from '@/hooks/useCart';
import { checkout_informations, shipping_charges } from '@/lib/data';
import { Input, Button as AntdButton } from 'antd';
import './styles/style.css'


const CheckOutPage = () => {
    const { cartInfo, prodData, totalAmount, totalItems, serverSynced } = useCart();
    const addToCart = useAddToCart();
    const { removeProduct, decrementFromCart } = useRemoveFromCart();
    const [createAccount, setCreateAccount] = useState(true);

    const [states, setStates] = useState({
        location: 'inside',
        couponCode: ''
    })

    const handleChange = (e) => {
        setStates(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    if (!serverSynced) {
        return <CheckoutPageSkeleton />
    }

    const shipping_cost = shipping_charges[states.location] * totalItems;

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
                                    value={states.location}
                                    label="Location"
                                    name="location"
                                    onChange={handleChange}
                                    variant='filled'
                                >
                                    <MenuItem value={'inside'}>Sylhet City</MenuItem>
                                    <MenuItem value={'outside'}>Outside Sylhet City</MenuItem>
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
                        <Stack
                            spacing={2}
                        >
                            <Stack spacing={1} >
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
                            <Stack direction="row" spacing={1} >
                                <Input
                                    placeholder='Coupon Code'
                                    name='couponCode'
                                    value={states.couponCode}
                                    onChange={handleChange}
                                    className='focus:border-red-500 hover:border-red-500'
                                />
                                <AntdButton type='primary' danger disabled={states.couponCode.length === 0}>Apply</AntdButton>
                            </Stack>
                            <Stack
                                sx={{
                                    backgroundColor: '#f2e9e4',
                                    borderRadius: '5px',
                                    p: 2,
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
                            >
                                Confirm Order
                            </Button>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Container>

    )
}

export default CheckOutPage;