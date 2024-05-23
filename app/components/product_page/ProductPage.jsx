import React from 'react';
import {
    Container, Stack, Chip, Box, Typography,
    Grid, Rating, List, ListItem, ListItemText, ListItemIcon
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';
import './styles/style.css';
import { product1 } from '@/lib/dev_data';
import ProductAction from './ProductAction';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ImageSlider from './ImageSlider';
const product_data = product1;


const Product = () => {
    return (
        <Container sx={{ my: 10 }}>
            <Grid container spacing={3} sx={{ bgcolor: '#ffffff', borderRadius: '10px', px: 3, py: 4 }}>
                <Grid item xs={12} md={5}>
                    <Box>
                        <img src='https://www.ryans.com/storage/products/main/lenovo-legion-slim-5i-16irh8-intel-core-i5-13500h-11709715097.webp' width="100%" />
                    </Box>
                    <ImageSlider images={product_data.images} />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Stack spacing={1}>
                        <Typography variant='h5'>Lenovo Legion Slim 5i 16IRH8 Intel Core i5 13500H 16GB RAM, 512GB SSD 16 Inch 2.5K QHD WQXGA Display Storm Grey Gaming Laptop</Typography>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label="In Stock"
                                icon={<CheckIcon />}
                                size='small'
                                color='secondary'
                                sx={{ p: 1 }}
                            />
                            <Chip
                                label="Brand: Lenovo"
                                size='small'
                                color='secondary'
                                variant='outlined'
                                sx={{ p: 1 }}
                            />
                        </Stack>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Rating
                                value={3.5}
                                max={5}
                                precision={0.1}
                                readOnly
                            />
                            <Link href="#">
                                <Stack direction="row" spacing={1}>
                                    <Typography variant='body1' container="span">3.5</Typography>
                                    <Typography variant='body2' container="span" color="text.secondary">out of 156 Reviews</Typography>
                                </Stack>
                            </Link>
                        </Stack>
                        <Stack direction="row" spacing={3} alignItems="center">
                            <Stack direction="row" spacing={1} alignItems="flex-start">
                                <Typography variant='h6' color="text.secondary">৳</Typography>
                                <Typography variant='h4' color="">1,75,000</Typography>
                            </Stack>
                            <Typography variant='h6' className='line-through decoration-gray-400' color="text.secondary">1,87,000</Typography>
                        </Stack>
                        <List dense={true}>
                            {
                                product_data.key_features.map((f, idx) => (
                                    <ListItem key={idx} dense={true} sx={{ px: 0, py: 0.1 }}>
                                        <CheckCircleOutlineIcon color='info' sx={{ mr: 1 }} />
                                        <ListItemText>
                                            {f}
                                        </ListItemText>
                                    </ListItem>
                                ))
                            }
                        </List>
                        <ProductAction />
                    </Stack>

                </Grid>

            </Grid>
        </Container>
    )
}

export default Product