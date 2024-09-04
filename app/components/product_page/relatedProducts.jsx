import {
    Box, Typography,
} from '@mui/material';

import ProductX from '../utils/ProductX';

const RelatedProducts = ({ related_products }) => {
    return (
        <Box sx={{ bgcolor: '#ffffff', borderRadius: '10px', p: 3, }}>
            <Typography
                variant='h6'
                color="primary"
                sx={{ mb: 1 }}
            >
                Similar Products
            </Typography>
            {
                related_products.map((p, idx) => (
                    <ProductX
                        key={idx}
                        product={p}
                    />
                ))
            }
        </Box>
    )
}

export default RelatedProducts;