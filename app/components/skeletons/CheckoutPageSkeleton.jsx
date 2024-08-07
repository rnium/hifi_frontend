import React from 'react';
import {
    Skeleton, Grid, Paper, Stack, Container
} from '@mui/material'

const CheckoutPageSkeleton = () => {
    return (
        <Container
            sx={{ my: 3 }}
        >
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                    xs={12}
                    md={7}
                >
                    <Stack
                        spacing={2}
                    >
                        <Skeleton variant='rounded' height={100} />
                        <Skeleton variant='rounded' height={100} />
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5}
                >
                    <Paper
                        sx={{
                            p: 3
                        }}
                    // backgroundColor='white'
                    // style={{
                    //     backgroundColor: 'white'
                    // }}
                    >
                        <Skeleton variant='rounded' height={500} />
                    </Paper>

                </Grid>
            </Grid>
        </Container>
    )
}

export default CheckoutPageSkeleton