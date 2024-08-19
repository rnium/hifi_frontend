'use client'

import { useEffect } from 'react';
import { Stack, Box, Typography, Container } from '@mui/material';
import { RiCheckLine } from '@remixicon/react';
import { useCart } from '@/hooks/useCart';

const Page = ({ params }) => {
    const { afterOrderCleanUp } = useCart();
    useEffect(() => {
        afterOrderCleanUp();
    }, [])
    return (
        <Container
            sx={{ py: 15 }}
        >
            <Stack
                spacing={1}
                alignItems='center'
            >
                <RiCheckLine
                    size={70}
                    color='green'
                />
                <Stack
                    direction='row'
                    spacing={1}
                    sx={{ mt: 2 }}
                >
                    <Typography
                        variant='h6'
                    >
                        Order ID:
                    </Typography>
                    <Typography
                        variant='h6'
                        component='span'
                        color='text.secondary'
                    >
                        {params.id}
                    </Typography>
                </Stack>
                <Typography
                    variant='h5'
                >
                    Thank you for your order! We're processing it now and will update you shortly!
                </Typography>

            </Stack>
        </Container>
    )
}

export default Page