'use client';

import { useState } from 'react';
import { Typography, Stack, Button, Rating, TextField } from '@mui/material';

const QuestionForm = () => {
    return (
        <Stack alignItems="center" spacing={1}>
            <Typography color="secondary" variant='body1'>Ask A Question</Typography>
            <TextField
                fullWidth
                label="Your Name"
                variant='filled'
                color='secondary'
            />
            <TextField
                fullWidth
                label="Query details"
                variant='filled'
                color='secondary'
                multiline
                rows={3}
            />
            <Button variant='contained' fullWidth>Post Question</Button>

        </Stack>
    )
}

export default QuestionForm;