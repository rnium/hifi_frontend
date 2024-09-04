'use client'

import React from 'react';
import {
    Stack, Box, Typography, Divider
} from '@mui/material';
import { Empty } from 'antd';
import Question from './mircro/Question';
import QuestionForm from './mircro/QuestionForm';

const ProductQuestions = ({questions}) => {
    return (
        <Box sx={{ bgcolor: '#ffffff', borderRadius: '10px', p: 3 }}>
            <Typography
                variant='h6'
                color="primary"
                sx={{ mb: 1 }}
            >
                Questions
            </Typography>
            {
                questions.length > 0 ?
                    questions.map((r, idx) => (
                        <Question key={idx} sx={{ mb: 1.5, p: 1 }} question={r} />
                    )) :
                    <Stack justifyContent="center" alignItems="center" sx={{ my: 5 }}>
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description={<Typography variant='body1'>No Questions Yet</Typography>}
                        />
                    </Stack>
            }

            <Divider sx={{ my: 2 }} />
            <QuestionForm />
        </Box>
    )
}

export default ProductQuestions