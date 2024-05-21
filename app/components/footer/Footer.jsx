import React from 'react';
import { Container, Box, Stack, Typography, Divider, Grid, IconButton } from '@mui/material';
import Image from 'next/image';
import hifilogo from '@/public/hifi_logo.png';
import { categories } from '@/lib/data';
import Link from 'next/link';
import { Input, Button } from 'antd';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';


const links = {
    company: [
        {
            title: 'About Us',
            uri: '#'
        },
        {
            title: 'Our Services',
            uri: '#'
        },
        {
            title: 'Terms & Conditions',
            uri: '#'
        },
        {
            title: 'Privacy Policy',
            uri: '#'
        },
        {
            title: 'Google Map Location',
            uri: 'https://maps.app.goo.gl/pXWBALuZfw3KV5D46',
            outside: true,
        },
        {
            title: 'Feedback',
            uri: '#'
        }
    ],
    socials: [
        {
            name: 'Facebook',
            icon: <FacebookIcon />,
            url: 'https://www.facebook.com/hificomputersylhet'
        },
        {
            name: 'Whatsapp',
            icon: <WhatsAppIcon />,
            url: 'https://wa.me/'
        },
    ]
}

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#ffffff' }}>
            <Container sx={{ py: 5 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={3} sx={{ maxWidth: '300px' }} justifyContent="center">
                            <Image src={hifilogo} alt='Hifi Computer Logo' width={170} />
                            <Typography color="text.secondary" variant='body2' paragraph={true} component="body1">HIFI Computer is the most trusted and largest IT solution in Sylhet, Empowerong businesses and individuals by providing authorized products and reliable services</Typography>
                            <Typography variant='body2' paragraph={true} component="body1">Copyright HIFI Computer </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Stack spacing={1}>
                            <Typography variant='body1' color="primary" sx={{ pb: 1 }}>HIFI COMPUTER</Typography>
                            {
                                links.company.map((l, idx) => {
                                    if (l.outside) {
                                        return (
                                            <a key={l.uri} href={l.uri} target='_blank'>
                                                <Typography color="text.secondary" variant='body2'>{l.title}</Typography>
                                            </a>
                                        )
                                    } else {
                                        return (
                                            <Link key={l.uri} href={l.uri}>
                                                <Typography color="text.secondary" variant='body2'>{l.title}</Typography>
                                            </Link>
                                        )
                                    }
                                })
                            }
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Stack spacing={1}>
                            <Typography variant='body1' color="primary" sx={{ pb: 1 }}>Top Categories</Typography>
                            {
                                categories.map((l, idx) => (
                                    <Link key={l.slug} href={'category/' + l.slug}>
                                        <Typography color="text.secondary" variant='body2'>{l.title}</Typography>
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
                                    links.socials.map(l => (
                                        <a href={l.url} target='_blank'>
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
                            <a href='mailto:hifi_computer@yahoo.com'>
                            <Typography variant='body2' color="text.secondary">hifi_computer@yahoo.com</Typography>
                            </a>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer