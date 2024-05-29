'use client';

import React, { useState } from 'react';
import {
    Container, Grid, Paper, Box, Chip, Stack, Typography, Breadcrumbs, Slider,
    FormGroup, Checkbox, FormControlLabel, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductGrid from './ProductGrid';

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

const processor_types = [
    {
        slug: 'corei3',
        title: 'Intel Core i3'
    },
    {
        slug: 'corei5',
        title: 'Intel Core i5'
    },
    {
        slug: 'corei7',
        title: 'Intel Core i7'
    },
    {
        slug: 'ryzen3',
        title: 'Ryzen 3'
    },
    {
        slug: 'ryzen5',
        title: 'Ryzen 5'
    },
]

const minPrice = 25000
const maxPrice = 352000

const CategoryPage = (props) => {
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    function pricetext(value) {
        return `${new Number(value).toLocaleString('en-IN')} Tk`;
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
                        children_categories.map(c => (
                            <Link href={`/category/${c.slug}`}>
                                <Chip sx={{ mr: 1, mb: 1 }} label={c.title} />
                            </Link>
                        ))
                    }
                </Box>
            </Paper>
            <Container sx={{ my: 2 }}>
                <Grid container sx={{ mt: 1 }} spacing={2}>
                    <Grid item xs={0} md={3} >
                        <Accordion
                            defaultExpanded={true}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography
                                    variant='h6'
                                    color="text.primary"
                                    fontSize="1.1rem"
                                >
                                    Price Range
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box sx={{ px: 2 }}>
                                    <Slider
                                        getAriaLabel={() => 'Price range'}
                                        value={priceRange}
                                        onChange={e => setPriceRange(e.target.value)}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={pricetext}
                                        min={minPrice}
                                        max={maxPrice}
                                    />
                                </Box>
                                <Stack sx={{ mt: 2 }} direction="row" justifyContent="space-between">
                                    <Chip sx={{ px: 0.5 }} variant='outlined' size='small' label={"Min: " + priceRange[0].toLocaleString('en-IN') + "৳"} />
                                    <Chip sx={{ px: 0.5 }} size='small' label={"Max: " + priceRange[1].toLocaleString('en-IN') + "৳"} />
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            defaultExpanded={true}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography
                                    variant='h6'
                                    color="text.primary"
                                    fontSize="1.1rem"
                                >
                                    Availability
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormGroup sx={{ px: 1 }}>
                                    <FormControlLabel name='availibility' control={<Checkbox defaultChecked />} label="In Stock" />
                                    <FormControlLabel name='availibility' control={<Checkbox />} label="Out of Stock" />
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            defaultExpanded={true}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography
                                    variant='h6'
                                    color="text.primary"
                                    fontSize="1.1rem"
                                >
                                    Processor Type
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormGroup >
                                    {
                                        processor_types.map(p => (
                                            <FormControlLabel name='availibility' control={<Checkbox />} label={p.title} />
                                        ))
                                    }

                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>

                    </Grid>
                    <Grid item xs={0} md={9} >
                        <ProductGrid />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CategoryPage

