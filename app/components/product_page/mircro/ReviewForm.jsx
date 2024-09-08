'use client';

import { message } from 'antd';
import { useState, useEffect } from 'react';
import { Typography, Stack, Button, Rating, TextField } from '@mui/material';
import { usePost } from '@/hooks/useApi';

const ReviewForm = ({insertReview, api}) => {
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");

    const {
        perform_post,
        data: new_review_data,
        success,
        error,
        loading,
        reset
    } = usePost(api, true);

    useEffect(() => {
        if (success && new_review_data) {
            message.success("Review Posted");
            insertQuestion(new_review_data);
            reset();
        }
        if (error) {
            message.error(error?.detail || "Cannot post review")
        }
    }, [success, new_review_data, error])

    const handleSubmit = () => {
        perform_post(
            {
                rating,
                description
            }
        )
    }
    

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
                onChange={e => setDescription(e.target.value)}
                multiline
                rows={3}
            />
            <Button
                variant='contained'
                fullWidth
                onClick={handleSubmit}
                disabled={loading}
            >
                Post Review
            </Button>

        </Stack>
    )
}

export default ReviewForm