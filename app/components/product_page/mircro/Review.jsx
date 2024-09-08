import React from 'react';
import { Typography, Avatar, Stack, Paper, Rating } from '@mui/material';
import dateFormat from 'dateformat';

const Review = ({ review, sx = {} }) => {
    return (
        <Paper sx={{ ...sx, p: 2 }} elevation={0} className='border rounded-lg' >
            <Stack direction="row" spacing={1} alignItems="center">
                <Avatar src={review.account.avatar} sx={{ width: 40, height: 40 }} />
                <Stack>
                    <Typography color="secondary" variant='body1'>
                        {review.account?.first_name} {review?.account?.last_name ? review.account.last_name : null}
                    </Typography>
                    <Typography color="text.secondary" variant='caption'>
                        {dateFormat(review.added_at, "h:MM TT, mmmm dS, yyyy")}
                    </Typography>
                </Stack>
            </Stack>
            <Rating
                value={review.rating}
                max={5}
                precision={0.1}
                size='small'
                sx={{ mt: 1 }}
                readOnly
            />
            <Typography variant='body2' >
                {review.description}
            </Typography>
        </Paper>
    )
}

export default Review