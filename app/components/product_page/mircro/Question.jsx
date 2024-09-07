import React from 'react';
import { Typography, Avatar, Stack, Paper, Rating } from '@mui/material';
import dateFormat from 'dateformat';

const Question = ({question, sx}) => {
    return (
        <Paper sx={{ ...sx, p: 2 }} elevation={0} className='border rounded-lg' >
            <Stack>
                <Typography color="secondary" variant='body1'>{question.account}</Typography>
                <Typography color="text.secondary" variant='caption'>{dateFormat(question.added_on, "h:MM TT, mmmm dS, yyyy")}</Typography>
            </Stack>
            <Typography variant='body2' sx={{mt: 1}}>
                {question.description}
            </Typography>


        </Paper>
    )
}

export default Question;