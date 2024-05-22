import React from 'react';
import { Container, Stack, Chip, Box, Typography, Grid, Rating } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';

const Product = () => {
    return (
        <Container sx={{ my: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                    <Box>
                        <img src='https://www.ryans.com/storage/products/main/lenovo-legion-slim-5i-16irh8-intel-core-i5-13500h-11709715097.webp' width="100%" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography variant='h5'>Lenovo Legion Slim 5i 16IRH8 Intel Core i5 13500H 16GB RAM, 512GB SSD 16 Inch 2.5K QHD WQXGA Display Storm Grey Gaming Laptop</Typography>
                    <Stack direction="row" sx={{ mt: 1 }} spacing={1}>
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
                    <Stack direction="row" sx={{ mt: 1 }} spacing={2} alignItems="center">
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

                </Grid>
            </Grid>
        </Container>
    )
}

export default Product