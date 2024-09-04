'use client'

import {
    Container, Stack, Chip, Box, Typography,
    Grid, Breadcrumbs
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from 'next/link';
import './styles/style.css';

import ProductSpecTables from './ProductSpecTables';
import ProductReviews from './ProductReviews';
import ProductQuestions from './ProductQuestions';
import ProductTop from './ProductTop';
import RelatedProducts from './relatedProducts';

const Product = ({ product, related_products }) => {
    return (
        <Container
            sx={{ mb: 10 }}
        >
            <Stack
                sx={{ my: 2 }}
                alignItems='center'
            >
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize='small' />}
                >
                    <Link href='/'>
                        <HomeIcon size="small" className='hover:text-red-600' />
                    </Link>
                    {
                        product.category_tree.map(cat => (
                            <Link key={cat.id} href={`/category/${cat.slug}`}>
                                <Typography
                                    variant='body2'
                                    fontSize={{ xs: '0.7rem', md: '1rem' }}
                                    className='hover:text-red-600'
                                >
                                    {cat.title}
                                </Typography>
                            </Link>
                        ))
                    }
                </Breadcrumbs>
            </Stack>
            <Box sx={{ bgcolor: '#ffffff', borderRadius: '10px', px: 3, py: 4 }} >
                <ProductTop product={product} />
            </Box>
            <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ bgcolor: '#ffffff', borderRadius: '10px', p: 3 }}>
                            <Typography
                                variant='h6'
                                color="primary"
                                sx={{ mb: 1 }}
                            >
                                Specifications
                            </Typography>
                            <ProductSpecTables tables={product.spec_tables} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack
                            spacing={2}
                        >
                            <ProductReviews reviews={[]} />
                            <ProductQuestions questions={[]} />
                            <RelatedProducts
                                related_products={related_products}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Product