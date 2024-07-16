'use client'

import {
    Container, Stack, Chip, Box, Typography,
    Grid, Rating, List, ListItem, ListItemText,
    Breadcrumbs
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CheckIcon from '@mui/icons-material/Check';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ErrorOutline } from '@mui/icons-material';
import Link from 'next/link';
import './styles/style.css';
import { product1 } from '@/lib/dev_data';
import ProductAction from './ProductAction';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DisplayImage from './mircro/DisplayImage';
import ProductSpecTables from './ProductSpecTables';
import ProductReviews from './ProductReviews';
import ProductQuestions from './ProductQuestions';
import ProductX from '../utils/ProductX';



const Product = ({ product }) => {
    return (
        <Container sx={{ mb: 10 }} >
            <Stack
                sx={{ my: 2 }}
                alignItems='center'
            >
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize='small' />}
                >
                    <Link href='/'>
                        <HomeIcon className='hover:text-red-600' />
                    </Link>
                    {
                        product.category_tree.map(cat => (
                            <Link key={cat.id} href={`/category/${cat.slug}`}>
                                <Typography
                                    variant='body2'
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
                <Grid container spacing={4} >
                    <Grid item xs={12} md={5}>
                        <DisplayImage images={product.images} />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Stack spacing={1}>
                            <Typography variant='h5'>
                                {product.title}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                {
                                    product.in_stock ?
                                        <Chip
                                            label="In Stock"
                                            icon={<CheckIcon />}
                                            size='small'
                                            color='secondary'
                                            sx={{ p: 1 }}
                                        /> :
                                        <Chip
                                            label="Out of Stock"
                                            icon={<ErrorOutline />}
                                            size='small'
                                            color='error'
                                            variant='outlined'
                                            sx={{ p: 1 }}
                                        />
                                }
                            </Stack>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Rating
                                    value={product.rating}
                                    max={5}
                                    precision={0.1}
                                    readOnly
                                />
                                <Link href="#">
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Typography variant='body1' container="span">{product.rating}</Typography>
                                        <Typography variant='body2' container="span" color="text.secondary">out of {product.num_ratings} Reviews</Typography>
                                    </Stack>
                                </Link>
                            </Stack>
                            <Stack direction="row" spacing={3} alignItems="center">
                                <Stack direction="row" spacing={1} alignItems="flex-start">
                                    <Typography variant='h6' color="text.secondary">৳</Typography>
                                    <Typography variant='h4' color="">{product?.priceSale ? product.priceSale.toLocaleString("en-IN") : product.price.toLocaleString("en-IN")}</Typography>
                                </Stack>
                                {
                                    product?.priceSale ?
                                        <Typography variant='h6' className='line-through decoration-gray-400' color="text.secondary">
                                            {product.price.toLocaleString("en-IN")}
                                        </Typography> : null
                                }
                            </Stack>
                            <List dense={true}>
                                {
                                    product.key_features.map((f, idx) => (
                                        <ListItem key={idx} dense={true} sx={{ px: 0, py: 0.1 }}>
                                            <CheckCircleOutlineIcon color='info' sx={{ mr: 1 }} />
                                            <ListItemText>
                                                {f}
                                            </ListItemText>
                                        </ListItem>
                                    ))
                                }
                            </List>
                            <ProductAction product={product} />
                        </Stack>

                    </Grid>
                </Grid>
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
                            {/* <Box sx={{ bgcolor: '#ffffff', borderRadius: '10px', p: 3, }}>
                                <Typography
                                    variant='h6'
                                    color="primary"
                                    sx={{ mb: 1 }}
                                >
                                    Similar Products
                                </Typography>
                                {
                                    product_data.related_products.map(p => (
                                        <ProductX key={`rp-${p.id}`} product={p} />
                                    ))
                                }
                            </Box> */}
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Product