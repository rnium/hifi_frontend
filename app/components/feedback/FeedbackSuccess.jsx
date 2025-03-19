import React from 'react';
import Image from 'next/image';
import { Container, Typography, Box, Stack } from '@mui/material';
import cover from '@/public/images/feedback_success.png';

const FeedbackSuccess = () => {
    return (
        <Container sx={{ my: 9 }}>
            <Stack justifyContent="center" alignItems="center" spacing={2}>
                <Image src={cover} alt="Feedback Submitted" width={340} />
                <Typography variant="h4" component="h1">
                    Feedback Submitted
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Thank you for your feedback. We appreciate your time and effort. We will get back to you as soon as possible.
                </Typography>
            </Stack>
        </Container>
    )
}

export default FeedbackSuccess