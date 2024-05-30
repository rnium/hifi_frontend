import React from 'react';
import { Container, Grid, Paper, Stack, Typography, TextField, Box, Button, Divider } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import hifilogo from '@/public/f5s2df.svg'


const page = () => {
  return (
    <>
      <Paper sx={{ py: 5, px: 3 }} elevation={0} className='rounded-xl border'>
        <Stack spacing={1} alignItems="center">
          <Image src={hifilogo} width={80} />
          <Stack textAlign="center" sx={{pb: 2}}>
            <Typography variant='h5'>User Login</Typography>
            <Typography variant='body2'>Welcome back</Typography>
          </Stack>
          <TextField
            label="Email"
            type="email"
            name='email'
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            name='password'
            fullWidth
          />
          <Stack className='w-full pt-5' direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant='body1'>
              Need an account? <Link className='text-green-500 transition-all hover:underline' href="/signup">Signup Here</Link>
            </Typography>
            <Button variant='contained'>Login</Button>
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