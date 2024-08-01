import React from 'react';
import { Grid, Box, Skeleton, Stack } from '@mui/material';


const ProductDetailTop = () => {
    return (
        <Grid container
            spacing={2}
        >
            <Grid
                item
                xs={12}
                md={5}
            >
                <Stack
                    spacing={1}
                >
                    <Skeleton width='100%' variant='rounded' height={350} />
                    <Grid
                        container
                    >
                        {
                            Array.from({ length: 4 }, (n, k) => k).map(idx => (
                                <Grid item xs={3}>
                                    <Skeleton
                                        width='96%'
                                        height={80}
                                        variant='rounded'
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Stack>
            </Grid>
            <Grid
                item
                xs={12}
                md={7}
            >
                <Box>
                    <Skeleton
                        variant='text'
                        height={40}
                    />
                    <Skeleton
                        variant='text'
                        height={40}
                        width='80%'
                    />
                    <Skeleton
                        variant='rounded'
                        height={25}
                        width='20%'
                        sx={{
                            borderRadius: '180px',
                            mt: 1
                        }}
                    />
                    <Stack
                        direction='row'
                        alignItems='center'
                        spacing={1}
                    >
                        <Skeleton
                            variant='text'
                            height={65}
                            width={150}
                        />
                        <Skeleton
                            variant='text'
                            height={50}
                            width={150}
                        />
                    </Stack>
                    <Stack
                        sx={{ mt: 2 }}
                    >
                        {
                            Array.from({ length: 6 }, (v, i) => i).map(idx => (
                                <Skeleton
                                    variant='text'
                                    height={30}
                                    width='50%'
                                />
                            ))
                        }
                    </Stack>
                    <Stack
                        direction='row'
                        spacing={3}
                        sx={{
                            mt: 2
                        }}
                    >
                        <Skeleton
                            variant='rounded'
                            height={40}
                            width={160}
                        />
                        <Skeleton
                            variant='rounded'
                            height={40}
                            width={160}
                        />
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProductDetailTop;