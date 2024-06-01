'use client';

import React from 'react';
import { Container, Grid, Paper, Stack, Typography, TextField, Box, Button, Divider } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import hifilogo from '@/public/f5s2df.svg';
import { usePost } from '@/hooks/useApi';
import { useFormik } from 'formik';


const page = ({ searchParams }) => {
  const [data, loading, error, login] = usePost("http://127.0.0.1:8000/auth/token/login/", false)
  const formik = useFormik({
    initialValues: {
      email: null,
      password: null,
    },
    onSubmit: values => {
      login(values);
    }
  })
  if (error) {
    console.log(error);
  }
  return (
    <>
      <Paper sx={{ py: 5, px: 3 }} elevation={0} className='rounded-xl border'>
        <Stack spacing={1} alignItems="center">
          <Image src={hifilogo} width={80} />
          <Stack textAlign="center" sx={{ pb: 2 }}>
            <Typography variant='h5'>User Login</Typography>
            <Typography variant='body2'>Welcome back</Typography>
          </Stack>
          <TextField
            label="Email"
            name='email'
            color='secondary'
            onChange={formik.handleChange}
            value={formik.values.email}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            name='password'
            color='secondary'
            onChange={formik.handleChange}
            value={formik.values.password}
            fullWidth
          />
          <Stack className='w-full pt-5' direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant='body1'>
              Need an account? <Link className='text-blue-600 transition-all hover:underline' href="/signup">Signup Here</Link>
            </Typography>
            <Button disabled={loading} onClick={formik.handleSubmit} variant='contained'>Login</Button>
          </Stack>
        </Stack>
      </Paper>
      <Typography variant='body2' textAlign="center" sx={{ mt: 2 }}>
        <Link className='text-green-800 transition-all hover:underline' href="#">Forgot Password?</Link>
      </Typography>
    </>

  )
}

export default page