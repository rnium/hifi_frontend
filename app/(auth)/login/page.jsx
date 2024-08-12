'use client';

import { useEffect } from 'react';
import { message } from 'antd';
import { Container, Grid, Paper, Stack, Typography, TextField, Box, Button, Divider } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import hifilogo from '@/public/f5s2df.svg';
import { useLogin } from '@/hooks/useAuth';
import { useUser } from '@/hooks/useUser';
import { useFormik } from 'formik';


const LoginPage = ({ searchParams }) => {
  const { success, loading, login, error } = useLogin();
  const { userIsAuthenticated, userIsLoaded, reset } = useUser()
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      login(values);
    }
  })
  
  const nextUrl = searchParams?.next || '/';

  useEffect(() => {
    if (userIsAuthenticated) {
      router.push(nextUrl);
      return;
    }
    if (success) {
      message.success("Login Successful");
      reset();
      router.push(nextUrl);
    }
    if (error) {
      message.error(error?.detail || error?.non_field_errors || 'Login Failed');
    }
  }, [success, error, userIsAuthenticated])

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
              Need an account? <Link className='text-blue-600 transition-all hover:underline' href={`/signup?next=${nextUrl}`}>Signup Here</Link>
            </Typography>
            <Button disabled={loading || userIsAuthenticated} onClick={formik.handleSubmit} variant='contained'>Login</Button>
          </Stack>
        </Stack>
      </Paper>
      <Typography variant='body2' textAlign="center" sx={{ mt: 2 }}>
        <Link className='text-green-800 transition-all hover:underline' href="#">Forgot Password?</Link>
      </Typography>
    </>

  )
}

export default LoginPage;