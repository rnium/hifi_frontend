'use client'

import { useState, useEffect, useCallback } from 'react';
import {
    Stack, Box, Typography, Divider
} from '@mui/material';
import { Empty } from 'antd';
import Review from './mircro/Review';
import ReviewForm from './mircro/ReviewForm';
import { useGet } from '@/hooks/useApi';
import { api_endpoints, api_host, api_suffixes } from '@/lib/data';


const ProductReviews = ({ slug }) => {
    const review_api_url = `${api_host}${api_endpoints.view_product}${slug}${api_suffixes.reviews}`;
    const {
        data: reviews_data, perform_get, loaded
    } = useGet(review_api_url, false, []);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        perform_get();
    }, [])

    useEffect(() => {
        if (reviews_data?.results) {
            setReviews(reviews_data.results)
        }
    }, [reviews_data, setReviews])

    const insertReview = useCallback((r) => {
        setReviews(prevData => ([
            ...prevData,
            r
        ]))
    }, [setReviews])

    return (
        <Box sx={{ bgcolor: '#ffffff', borderRadius: '10px', p: 3 }}>
            <Typography
                variant='h6'
                color="primary"
                sx={{ mb: 1 }}
            >
                Customer Reviews
            </Typography>
            {
                reviews.length > 0 ?
                    reviews.map((r, idx) => (
                        <Review key={idx} sx={{ mb: 1.5, p: 1 }} review={r} />
                    )) :
                    <Stack justifyContent="center" alignItems="center" sx={{ my: 5 }}>
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description={<Typography variant='body1'>No Reviews Yet</Typography>}
                        />
                    </Stack>
            }

            <Divider sx={{ my: 2 }} />
            <ReviewForm 
                insertReview={insertReview}
                api={review_api_url}
            />
        </Box>
    )
}

export default ProductReviews