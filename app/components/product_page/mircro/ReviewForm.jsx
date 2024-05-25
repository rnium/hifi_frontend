'use client';

import { useState } from 'react';
import { Typography, Stack, Button, Rating, TextField } from '@mui/material';

const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    return (
        <Stack alignItems="center" spacing={1}>
            <Typography color="secondary" variant='body1'>Review This Product</Typography>
            <Rating
                value={rating}
                onChange={(event, newRating) => setRating(newRating)}
                max={5}
                min={1}
                sx={{ mt: 1 }}
            />
            <TextField
                fullWidth
                label="Write Your Review"
                variant='filled'
                color='secondary'
                multiline
                rows={3}
            />
            <Button variant='contained' fullWidth>Post Review</Button>

        </Stack>
    )
}

export default ReviewForm