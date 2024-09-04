import React from 'react';
import { Container, Box, Stack, Typography, Divider, Grid, IconButton } from '@mui/material';
import Image from 'next/image';
import hifilogo from '@/public/hifi_logo.png';
import Link from 'next/link';
import { Input, Button } from 'antd';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { getAPIData } from '@/utils/fetchData';
import { api_endpoints } from '@/lib/data';
import './style/style.css';
import { links } from '@/lib/site_data';

const Footer = async () => {
    const topCategories = await getAPIData(api_endpoints.main_categories, 'force-cache');
    return (
        <Box sx={{ backgroundColor: '#ffffff' }}>
            <Container sx={{ py: 5 }} disableGutters={false}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={4} sx={{ maxWidth: '300px', height: '100%' }} alignItems="center" justifyContent="center">
                            <Image src={hifilogo} alt='Hifi Computer Logo' width={170} />
                            <Typography color="text.secondary" variant='body2' paragraph={true} component="body1">HIFI Computer is the most trusted and largest IT solution in Sylhet, Empowerong businesses and individuals by providing authorized products and reliable services</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Stack spacing={1}>
                            <Typography variant='body1' color="primary" sx={{ pb: 1 }}>HIFI COMPUTER</Typography>
                            {
                                links.company.map((l, idx) => {
                                    if (l.outside) {
                                        return (
                                            <a key={idx} href={l.uri} target='_blank'>
                                                <Typography className='footer-link-text' color="text.secondary" variant='body2'>{l.title}</Typography>
                                            </a>
                                        )
                                    } else {
                                        return (
                                            <Link  key={idx} href={l.uri}>
                                                <Typography className='footer-link-text' color="text.secondary" variant='body2'>{l.title}</Typography>
                                            </Link>
                                        )
                                    }
                                })
                            }
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Stack spacing={1}>
                            <Typography variant='body1' color="primary" sx={{ pb: 1 }}>TOP CATEGORIES</Typography>
                            {
                                topCategories.map((l, idx) => (
                                    <Link key={l.slug} href={'category/' + l.slug}>
                                        <Typography className='footer-link-text' color="text.secondary" variant='body2'>{l.title}</Typography>
                                    </Link>
                                ))
                            }
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack sx={{ height: '100%' }} justifyContent="center">
                            <Typography variant='body1'>Deals Just For You</Typography>
                            <Typography variant='body2' sx={{ mb: 2 }} color="text.secondary">Get exclusive offers directly to your inbox</Typography>
                            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                                <Input placeholder='Your Email' />
                                <Button type='primary'>Subscribe</Button>
                            </Stack>
                            <Stack direction="row" >
                                {
                                    links.socials.map((l, idx) => (
                                        <a href={l.url} key={idx} target='_blank'>
                                            <IconButton>
                                                {l.icon}
                                            </IconButton>
                                        </a>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Grid>


                </Grid>
                <Divider sx={{ my: 4 }} />
                <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={2}>
                    <Stack direction={{ xs: "column", md: "row" }} alignItems="center" spacing={1}>
                        <CopyrightIcon fontSize='small' />
                        <Typography variant='body2' color="text.secondary">2024 HIFI Computer. All rights reserved</Typography>
                    </Stack>
                    <Stack sx={{pt: {xs: 3, md: 0}}} direction={{ xs: "column", md: "row" }} alignItems="center" spacing={2}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <LocationOnIcon color='primary' fontSize='small' />
                            <Typography variant='body2' color="text.secondary">Karim Ullah Market, Bandar Bazar, Sylhet</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <EmailIcon color='primary' fontSize='small' />
                            <a href='mailto:hificomputerbd@gmail.com'>
                            <Typography variant='body2' color="text.secondary">hificomputerbd@gmail.com</Typography>
                            </a>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer