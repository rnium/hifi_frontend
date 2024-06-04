'use client';

import React, { useEffect } from 'react';
import { Container, Grid, Paper, Stack, Typography, TextField, Box, Button } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import hifilogo from '@/public/f5s2df.svg';
import { useFormik } from 'formik';
import { useSignup } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { message } from 'antd';
import * as yup from 'yup';


const SignupPage = ({ searchParams }) => {
    const { signup_success, login_success, loading, error, perform_signup } = useSignup();
    const formik = useFormik({
        initialValues: {
            first_name: '',
            phone: '',
            email: '',
            password: '',
            re_password: '',
        },
        validationSchema: yup.object({
            first_name: yup.string().required("Name is required").min(3, "Name must be atleast 3 characters long")
        }),
        onSubmit: values => {
            perform_signup(values);
        }
    })
    const router = useRouter();
    
    useEffect(() => {
        if (signup_success && login_success) {
            message.success("Welcome To Hi-Fi Computer")
            router.push(searchParams?.next ? searchParams.next : '/');
        }
    }, [login_success])

    useEffect(() => {
        if (error?.non_field_errors) {
            message.error(error?.non_field_errors);
        } else if (error) {
            message.error(error);
        }
    }, [error])
    return (
        <Paper sx={{ py: 4, px: 3 }} elevation={0} className='rounded-xl border'>
            <Stack spacing={1} alignItems="center">
                <Image src={hifilogo} width={80} />
                <Typography variant='h6'>User Signup</Typography>
                <TextField
                    label="Name"
                    name='first_name'
                    color='secondary'
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={ formik.touched.first_name && formik.errors?.first_name}
                    helperText={formik.errors?.first_name}
                    fullWidth
                    required
                />
                <TextField
                    label="Phone"
                    name='phone'
                    color='secondary'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={error?.phone}
                    helperText={error?.phone}
                    fullWidth
                    required
                />
                <TextField
                    label="Email"
                    type="email"
                    name='email'
                    color='secondary'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={error?.email}
                    helperText={error?.email}
                    fullWidth
                    required
                />
                <TextField
                    label="Password"
                    type="password"
                    name='password'
                    color='secondary'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={error?.password}
                    helperText={error?.password}
                    fullWidth
                />
                <TextField
                    label="Retype Password"
                    type="password"
                    name='re_password'
                    color='secondary'
                    value={formik.values.re_password}
                    onChange={formik.handleChange}
                    error={error?.re_password}
                    helperText={error?.re_password}
                    fullWidth
                />
                <Stack className='w-full' direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant='body1'>
                        Have an account? <Link className='text-blue-600 transition-all hover:underline' href="/login">Login Here</Link>
                    </Typography>
                    <Button disabled={loading} onClick={formik.handleSubmit} variant='contained'>Sign Up</Button>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default SignupPage;