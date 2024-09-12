'use client';

import { message } from 'antd';
import { useState, useEffect } from 'react';
import { Typography, Stack, Button, Rating, TextField } from '@mui/material';
import { usePost } from '@/hooks/useApi';
import { useUserState } from '@/hooks/useUser';
import NeedsAuthentication from '../../utils/NeedsAuthentication';

const ReviewForm = ({ insertReview, api }) => {
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");
    const { userIsAuthenticated } = useUserState();

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
            insertReview(new_review_data);
            reset();
            setRating(0);
            setDescription("")
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
            {
                userIsAuthenticated ?
                    <>
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
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            multiline
                            rows={3}
                        />
                        <Button
                            variant='contained'
                            fullWidth
                            onClick={handleSubmit}
                            disabled={loading || description.length === 0 || rating === 0}
                        >
                            Post Review
                        </Button>
                    </>
                    :
                    <NeedsAuthentication
                        description='You need to login to review this product'
                    />
            }

        </Stack>
    )
}

export default ReviewForm