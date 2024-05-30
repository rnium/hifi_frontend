import React from 'react';
import { Container, Grid, Paper, Stack, Typography, TextField, Box, Button } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import hifilogo from '@/public/f5s2df.svg'
import banner from '@/public/images/11786050_4816248.svg'


const page = () => {
    return (
        <Paper sx={{ py: 4, px: 3 }} elevation={0} className='rounded-xl border'>
            <Stack spacing={1} alignItems="center">
                <Image src={hifilogo} width={80} />
                <Typography variant='h6'>User Signup</Typography>
                <TextField
                    label="Name"
                    name='name'
                    fullWidth
                />
                <TextField
                    label="Phone"
                    name='phone'
                    fullWidth
                />
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
                <TextField
                    label="Retype Password"
                    type="password"
                    name='re_password'
                    fullWidth
                />
                <Stack className='w-full' direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant='body1'>
                        Have an account? <Link className='text-green-500 transition-all hover:underline' href="/login">Login Here</Link>
                    </Typography>
                    <Button variant='contained'>Sign Up</Button>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default page