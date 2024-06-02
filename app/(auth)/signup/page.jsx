'use client';

import React from 'react';
import { Container, Grid, Paper, Stack, Typography, TextField, Box, Button } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import hifilogo from '@/public/f5s2df.svg';
import { useFormik } from 'formik';
import { useSignup } from '@/hooks/useAuth';


const page = () => {
    const {signup_success, login_success, loading, error, perform_signup} = useSignup();
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            password: '',
            re_password: '',
        },
        onSubmit: values => {
            perform_signup(values);
        }
    })
    return (
        <Paper sx={{ py: 4, px: 3 }} elevation={0} className='rounded-xl border'>
            <Stack spacing={1} alignItems="center">
                <Image src={hifilogo} width={80} />
                <Typography variant='h6'>User Signup</Typography>
                <TextField
                    label="Name"
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    fullWidth
                />
                <TextField
                    label="Phone"
                    name='phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    fullWidth
                />
                <TextField
                    label="Email"
                    type="email"
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    fullWidth
                />
                <TextField
                    label="Password"
                    type="password"
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    fullWidth
                />
                <TextField
                    label="Retype Password"
                    type="password"
                    name='re_password'
                    value={formik.values.re_password}
                    onChange={formik.handleChange}
                    fullWidth
                />
                <Stack className='w-full' direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant='body1'>
                        Have an account? <Link className='text-green-500 transition-all hover:underline' href="/login">Login Here</Link>
                    </Typography>
                    <Button onClick={formik.handleSubmit} variant='contained'>Sign Up</Button>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default page