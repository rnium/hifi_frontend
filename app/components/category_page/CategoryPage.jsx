'use client'

import React, { useState, useEffect } from 'react';
import {
    Container, Grid, Paper, Box, Chip, Stack, Typography, Breadcrumbs, Slider,
    FormGroup, Checkbox, FormControlLabel, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/navigation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductGrid from './ProductGrid';
import ProductsSkeleton from './ProductsSkeleton';
import CategoryPagination from './CategoryPagination';
import CategoryChoices from './CategoryChoices';
import { useGet } from '@/hooks/useApi';
import { api_endpoints, api_suffixes } from '@/lib/data';


const minPrice = 25000
const maxPrice = 352000


const CategoryPage = ({ params, cat_data }) => {
    // const [page, setPage] = useState(1);
    // const [count, setCount] = useState(0);
    // const [rowsPerPage, setRowsPerPage] = useState(0);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [availibility, setAvailibility] = useState([]);

    const {
        data: paginated_data, perform_get, loaded, loading, error
    } = useGet(`${process.env.NEXT_PUBLIC_API_HOST}${api_endpoints.view_category}${params?.slug}${api_suffixes.all_products}`);

    // useEffect(() => {
    //     if (!loaded) {
    //         perform_get();
    //     }
    // }, [])

    const [selectedTags, setSelectedTags] = useState([]);

    const toggleAvalibility = (status) => {
        if (availibility.includes(status)) {
            setAvailibility(prevState => prevState.filter(a_status => a_status !== status));
        } else {
            setAvailibility(prevState => [...prevState, status])
        }
    }

    const ToggleTags = (id) => {
        if (selectedTags.includes(id)) {
            setSelectedTags(prevTags => prevTags.filter(tag_id => tag_id !== id));
        } else {
            setSelectedTags(prevState => [...prevState, id])
        }
    }


    useEffect(() => {
        const params = {
            price: priceRange.join()
        }
        if (selectedTags.length) {
            params.tags = selectedTags.join();
        }
        if (availibility.length) {
            params.availibility = availibility.join();
        }

        perform_get(params);
    }, [selectedTags, availibility, priceRange])


    return (
        <div>
            <Paper
                sx={{ py: 2, px: 2 }}
                elevation={0}
                className='border'
            >
                <Stack direction="row" justifyContent="space-between" alignItems='center'>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize='small' />}
                    >
                        <Link href='/'>
                            <HomeIcon className='hover:text-red-600' />
                        </Link>
                        {
                            cat_data.category_tree.map(cat => (
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
                    {
                        cat_data?.logo ?
                            <img alt={cat_data.title} style={{ maxWidth: '120px', maxHeight: '60px' }} src={cat_data.logo} />
                            : null
                    }
                </Stack>
                <Typography
                    variant='h5'
                    component="h2"
                    sx={{ mt: 1 }}
                    color="primary"
                >
                    {cat_data?.seo_title || cat_data.title}
                </Typography>
                {
                    cat_data?.description ?
                        <Typography
                            variant='body2'
                            component="h3"
                            color="text.secondary"
                        >
                            {cat_data.description}
                        </Typography> : null
                }
                <Box sx={{ mt: 1 }}>
                    {
                        cat_data.childs.filter(child => child.cat_type != 'tag').map((c, idx) => (
                            <Link key={idx} href={`/category/${c.slug}`}>
                                <Chip sx={{ mr: 1, mb: 1 }} label={c.title} />
                            </Link>
                        ))
                    }
                </Box>
            </Paper>
            <Container 
                sx={{ my: 2, px: {xs: 2, md: 0} }}
            >
                <Grid container sx={{ mt: 1 }} spacing={2}>
                    <Grid item xs={0} md={3} >
                        <CategoryChoices
                            groups={cat_data?.groups || []}
                            minPrice={minPrice}
                            maxPrice={maxPrice}
                            priceRange={priceRange}
                            toggleAvalibility={toggleAvalibility}
                            setPriceRange={setPriceRange}
                            ToggleTags={ToggleTags}
                            sx={{
                                display: {xs: 'none', md: 'block'}
                            }}
                        />

                    </Grid>
                    <Grid item xs={0} md={9} >
                        {
                            loaded && !loading ?
                                <>
                                    <ProductGrid products={paginated_data?.results} />
                                    <Box sx={{ mt: 2 }}>
                                        <CategoryPagination 
                                            data={paginated_data}
                                            perform_get={perform_get}
                                        />
                                    </Box>
                                </> :
                                <ProductsSkeleton num={8} />
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default CategoryPage

