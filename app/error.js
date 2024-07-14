'use client' // Error components must be Client Components


import NavBar from './components/navigation/NavBar'
import { useEffect } from 'react'
import { Typography, Stack } from '@mui/material'
import Image from 'next/image'
import error_logo from '@/public/images/error.svg';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.log(error)
    }, [error])

    return (
        <>
            <NavBar />
            <div>
                <Stack
                    sx={{my: 10}}
                    alignItems='center'
                >
                    <Image src={error_logo} width={400} />
                    <Typography
                        variant='h4'
                        textAlign='center'
                    >
                        {error.message}
                    </Typography>
                </Stack>
                
            </div>
        </>
    )
}