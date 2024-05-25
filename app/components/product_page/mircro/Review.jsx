import React from 'react';
import { Typography, Avatar, Stack, Paper, Rating } from '@mui/material';
import dateFormat from 'dateformat';

const Review = (props) => {
    let review = props.review;
    return (
        <Paper sx={{ ...props.sx, p: 2 }} elevation={0} className='border rounded-lg' >
            <Stack direction="row" spacing={1} alignItems="center">
                <Avatar src={review.user_avatar} sx={{ width: 40, height: 40 }} />
                <Stack>
                    <Typography color="secondary" variant='body1'>{review.name}</Typography>
                    <Typography color="text.secondary" variant='caption'>{dateFormat(review.posted_on, "h:MM TT, mmmm dS, yyyy")}</Typography>
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
                {review.review}
            </Typography>


        </Paper>
    )
}

export default Review