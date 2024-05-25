import React from 'react';
import { Typography, Avatar, Stack, Paper, Rating } from '@mui/material';
import dateFormat from 'dateformat';

const Question = (props) => {
    let question = props.question;
    return (
        <Paper sx={{ ...props.sx, p: 2 }} elevation={0} className='border rounded-lg' >
            <Stack>
                <Typography color="secondary" variant='body1'>{question.name}</Typography>
                <Typography color="text.secondary" variant='caption'>{dateFormat(question.posted_on, "h:MM TT, mmmm dS, yyyy")}</Typography>
            </Stack>
            <Typography variant='body2' sx={{mt: 1}}>
                {question.question}
            </Typography>


        </Paper>
    )
}

export default Question;