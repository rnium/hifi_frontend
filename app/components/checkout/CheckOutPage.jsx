'use client'

import { useState, useEffect, useCallback } from 'react';
import CheckoutPageSkeleton from '../skeletons/CheckoutPageSkeleton';
import {
    Stack, Box, Paper, Button, Typography, TextField, Switch, Grid, Container,
    FormControl, Alert, AlertTitle, InputLabel, Select, MenuItem, Link as MuiLink
} from '@mui/material';
import ProductCheckout from '../utils/ProductCheckout';
import { useCart, useAddToCart, useRemoveFromCart } from '@/hooks/useCart';
import { checkout_informations, shipping_charges } from '@/lib/data';
import { RiCoupon3Line } from '@remixicon/react'
import { Input, Button as AntdButton, message } from 'antd';
import './styles/style.css'
import { useUser } from '@/hooks/useUser';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { usePost } from '@/hooks/useApi';
import { api_host, api_endpoints, localstorage_keys } from '@/lib/data';


const required_message = 'This field is required'

const CheckOutPage = () => {
    const { cartInfo, prodData, totalAmount, totalItems, serverSynced } = useCart();
    const { userIsAuthenticated, userIsLoaded, userInfo } = useUser();
    const addToCart = useAddToCart();
    const { removeProduct, decrementFromCart } = useRemoveFromCart();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        location: 'inside',
        address: '',
        couponCode: ''
    })
    const [couponDiscount, setCouponDiscount] = useState(0);
    const {
        data: coupon_data,
        perform_post: apply_coupon,
        loading: applying_coupon,
        success: apply_coupon_success,
        error: apply_coupon_error,
        reset: reset_coupon_api
    } = usePost(`${api_host}${api_endpoints.apply_coupon}`)

    const validationSchema = Yup.object({
        first_name: Yup.string().required(required_message).min(4, 'Should be atleast 4 characters'),
        last_name: Yup.string(),
        phone: Yup.string().required(required_message).min(11),
        email: Yup.string().email('Enter a valid email'),
        address: Yup.string().required(required_message),
        couponCode: Yup.string()
    })

    const handleApplyCoupon = useCallback(couponCode => {
        apply_coupon({
            couponCode,
            cartid: localStorage.getItem(localstorage_keys.cartid),
        })
    }, [])

    useEffect(() => {
        if (userIsAuthenticated) {
            setFormData(prevState => ({
                ...prevState,
                first_name: userInfo?.first_name || '',
                last_name: userInfo?.last_name || '',
                phone: userInfo?.phone || '',
                email: userInfo?.email || '',
                address: userInfo?.address || '',
            }))
        }
    }, [userIsAuthenticated])

    useEffect(() => {
        setShippingCost(shipping_charges[formData.location] * totalItems);
    }, [totalItems])

    useEffect(() => {
        if (apply_coupon_error) {
            message.error(apply_coupon_error?.detail || 'Cannot apply coupon')
        }
        if (apply_coupon_success && coupon_data) {
            setCouponDiscount(coupon_data?.discount)
            message.success('Coupon Applied');
        }
        reset_coupon_api();
    }, [apply_coupon_success, apply_coupon_error, coupon_data])

    useEffect(() => {
        setCouponDiscount(0)
    }, [cartInfo])

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
            <Formik
                enableReinitialize
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={values => {
                    values.cartid = localStorage.getItem(localstorage_keys.cartid)
                    console.log(values);

                }}
            >
                {
                    ({ values, touched, errors, handleChange, handleSubmit, handleBlur, isSubmitting }) => {
                        return (
                            <Form noValidate>
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
                                                    fullWidth
                                                    label="First Name"
                                                    variant='filled'
                                                    name="first_name"
                                                    value={values.first_name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.first_name && errors.first_name}
                                                    helperText={touched.first_name && errors.first_name ? errors.first_name : ''}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    label="Last Name"
                                                    variant='filled'
                                                    fullWidth
                                                    name="last_name"
                                                    value={values.last_name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.last_name && errors.last_name}
                                                    helperText={touched.last_name && errors.last_name ? errors.last_name : ''}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Phone"
                                                    variant='filled'
                                                    fullWidth
                                                    name="phone"
                                                    value={values.phone}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.phone && errors.phone}
                                                    helperText={touched.phone && errors.phone ? errors.phone : ''}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Email"
                                                    variant='filled'
                                                    fullWidth
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.email && errors.email}
                                                    helperText={touched.email && errors.email ? errors.email : ''}
                                                />
                                            </Grid>

                                            <Grid item xs={12} md={4}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={values.location}
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
                                                    name="address"
                                                    value={values.address}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.address && errors.address}
                                                    helperText={touched.address && errors.address ? errors.address : ''}
                                                />
                                            </Grid>

                                            {
                                                userIsLoaded && !userIsAuthenticated && (
                                                    <Grid item xs={12}>
                                                        <Alert severity="warning">
                                                            <AlertTitle>Please Note</AlertTitle>
                                                            You're not currently logged in. Although you can complete your order without being logged in, we recommend <Link href='/login?next=/checkout'><MuiLink>Login</MuiLink></Link> or <Link href='/signup?next=/checkout'><MuiLink>Signup</MuiLink></Link>  before placing your order.
                                                        </Alert>
                                                    </Grid>
                                                )
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
                                                <Stack
                                                    direction="row"
                                                    alignItems='center'
                                                    spacing={1}>
                                                    <RiCoupon3Line
                                                        size={45}
                                                        style={{
                                                            color: 'gray'
                                                        }}
                                                    />
                                                    <Input
                                                        placeholder='Coupon Code'
                                                        name='couponCode'
                                                        value={values.couponCode}
                                                        onChange={handleChange}
                                                        className='focus:border-red-500 hover:border-red-500'
                                                    />
                                                    <AntdButton
                                                        type='primary'
                                                        danger
                                                        disabled={values.couponCode.length === 0 || applying_coupon}
                                                        onClick={() => handleApplyCoupon(values.couponCode)}
                                                    >
                                                        Apply
                                                    </AntdButton>
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
                                                        <Typography>৳ {shippingCost.toLocaleString('en-in')}</Typography>
                                                    </Stack>
                                                    {
                                                        couponDiscount > 0 && (
                                                            <Stack
                                                                direction='row'
                                                                justifyContent='space-between'
                                                            >
                                                                <Typography color='text.secondary'>Discount</Typography>
                                                                <Typography>- ৳ {couponDiscount.toLocaleString('en-in')}</Typography>
                                                            </Stack>
                                                        )
                                                    }
                                                    <Stack
                                                        direction='row'
                                                        justifyContent='space-between'
                                                        sx={{ borderTop: '1px dashed gray', pt: 1, mt: 2 }}
                                                    >
                                                        <Typography >Total</Typography>
                                                        <Typography>৳ {(totalAmount + shippingCost - couponDiscount).toLocaleString('en-in')}</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Button
                                                    variant='contained'
                                                    // disabled={isSubmitting}
                                                    onClick={handleSubmit}
                                                    fullWidth
                                                >
                                                    Confirm Order
                                                </Button>
                                            </Stack>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Form>
                        )
                    }
                }
            </Formik>
        </Container>

    )
}

export default CheckOutPage;