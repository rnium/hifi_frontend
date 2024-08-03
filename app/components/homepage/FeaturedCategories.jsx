import {
    Grid, Card, Stack, Typography, Divider
} from '@mui/material';
import { featured_cats } from '@/lib/data';
import CategoryIcon from '@mui/icons-material/Category';
import Link from 'next/link';

const FeaturedCategories = ({ sx }) => {
    return (
        <Grid container sx={sx} spacing={1.5}>
            <Grid item xs={12} sx={{mb: 1}}>
                <Divider textAlign='center' variant='middle' sx={{ flexGrow: 1 }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <CategoryIcon color='primary' fontSize='medium' />
                        <Typography variant='h5' component='h5' color="primary">Featured Categories</Typography>
                    </Stack>
                </Divider>
            </Grid>
            {
                featured_cats.map((cat, idx) => (
                    <Grid key={idx} item xs={4} md={2} >
                        <Link
                            href={`/category/${cat.slug}`}
                        >
                            <Card
                                className='featured-cat'
                                sx={{ p: 2 }}
                                elevation={0}
                            >
                                <Stack
                                    spacing={1}
                                    alignItems='center'
                                >
                                    {cat.icon}
                                    <Typography
                                        textAlign='center'
                                        className='title'
                                        variant='body1'
                                        fontSize={{ xs: '0.7rem', md: '1rem' }}
                                    >
                                        {cat.title}
                                    </Typography>
                                </Stack>
                            </Card>
                        </Link>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default FeaturedCategories;