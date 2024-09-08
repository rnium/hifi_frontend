'use client'

import { useEffect, useCallback, useMemo, useState } from 'react';
import {
    Stack, Box, Typography, Divider
} from '@mui/material';
import { Empty } from 'antd';
import Question from './mircro/Question';
import QuestionForm from './mircro/QuestionForm';
import { useGet } from '@/hooks/useApi';
import { api_endpoints, api_host, api_suffixes } from '@/lib/data';


const ProductQuestions = ({ slug }) => {
    const question_api_url = `${api_host}${api_endpoints.view_product}${slug}${api_suffixes.questions}`;
    const {
        data: questions_data, perform_get, loaded
    } = useGet(question_api_url, false, []);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        perform_get();
    }, [])

    useEffect(() => {
        if (questions_data?.results) {
            setQuestions(questions_data.results)
        }
    }, [questions_data, setQuestions])

    const insertQuestion = useCallback((q) => {
        setQuestions(prevData => ([
            ...prevData,
            q
        ]))
    }, [setQuestions])


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
                questions.map((r, idx) => (
                    <Question
                        key={idx}
                        sx={{ mb: 1.5, p: 1 }}
                        question={r}
                    />
                ))
            }
            {
                loaded && questions.length === 0 && (
                    <Stack justifyContent="center" alignItems="center" sx={{ my: 5 }}>
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description={<Typography variant='body1'>No Questions Yet</Typography>}
                        />
                    </Stack>
                )
            }

            <Divider sx={{ my: 2 }} />
            <QuestionForm
                api={question_api_url}
                insertQuestion={insertQuestion}
            />
        </Box>
    )
}

export default ProductQuestions