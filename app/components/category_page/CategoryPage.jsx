'use client'

import React, { useState, useEffect } from 'react';
import {
    Container, Grid, Paper, Box, Chip, Stack, Typography, Breadcrumbs, Slider,
    FormGroup, Checkbox, FormControlLabel, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductGrid from './ProductGrid';
import CategoryPagination from './CategoryPagination';
import CategoryChoices from './CategoryChoices';
import { api_endpoints } from '@/lib/data';
import { useGet } from '@/hooks/useApi';

let cat_hiararchy = [
    {
        id: 1,
        title: "Laptop",
        slug: 'laptop',
    },
    {
        id: 2,
        title: "All Laptop",
        slug: 'all-laptop',
    },
    {
        id: 15,
        title: "Lenovo",
        slug: 'lenovo',
    },
]

const children_categories = [
    {
        id: 54,
        title: 'Lenovo',
        slug: 'lenovo'
    },
    {
        id: 51,
        title: 'Asus',
        slug: 'asus'
    },
    {
        id: 51,
        title: 'Asus',
        slug: 'asus'
    },
    {
        id: 51,
        title: 'Asus',
        slug: 'asus'
    },
    {
        id: 51,
        title: 'Asus',
        slug: 'asus'
    },
]

const CategoryPage = ({params}) => {
    const {
        data, perform_get, loaded, error
    } = useGet(`${process.env.NEXT_PUBLIC_API_HOST}${api_endpoints.view_category}${params?.slug}/`);

    useEffect(() => {
        if (!loaded) {
            perform_get();
        }
    }, [])

    if (!loaded) {
        return <div>Loading...</div>
    }
    

    return (
        <>
            <Paper
                sx={{ py: 2, px: 2 }}
                elevation={0}
                className='border'
            >
                <Stack direction="row" justifyContent="space-between">
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize='small' />}
                    >
                        <HomeIcon />
                        {
                            cat_hiararchy.map(cat => (
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
                    <img width={"120px"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AsusTek-black-logo.png/1200px-AsusTek-black-logo.png"} />
                </Stack>
                <Typography
                    variant='h5'
                    component="h2"
                    sx={{ mt: 1 }}
                    color="primary"
                >
                    Asus Laptop Price in Bangladesh
                </Typography>
                <Typography
                    variant='body2'
                    component="h3"
                    color="text.secondary"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse exercitationem odit enim est fugiat libero recusandae quo tempore rem excepturi perferendis ratione doloremque doloribus tenetur iste, autem vero ut quas harum? Explicabo soluta quo voluptates labore, nam, officiis eum officia ducimus molestiae laudantium harum ab animi, id nulla corrupti.
                </Typography>
                <Box sx={{ mt: 1 }}>
                    {
                        children_categories.map((c, idx) => (
                            <Link key={idx} href={`/category/${c.slug}`}>
                                <Chip sx={{ mr: 1, mb: 1 }} label={c.title} />
                            </Link>
                        ))
                    }
                </Box>
            </Paper>
            <Container sx={{ my: 2 }}>
                <Grid container sx={{ mt: 1 }} spacing={2}>
                    <Grid item xs={0} md={3} >
                        <CategoryChoices 
                            groups={data?.groups || []}
                        />

                    </Grid>
                    <Grid item xs={0} md={9} >
                        <ProductGrid />
                        <Box sx={{ mt: 2 }}>
                            <CategoryPagination />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CategoryPage

