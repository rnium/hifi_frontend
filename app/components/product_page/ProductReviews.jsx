import {
    Stack, Box, Typography, Divider
} from '@mui/material';
import { Empty } from 'antd';
import Review from './mircro/Review';
import ReviewForm from './mircro/ReviewForm';


const ProductReviews = ({reviews}) => {
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
            <ReviewForm />
        </Box>
    )
}

export default ProductReviews