import React from 'react';
import { Container, Box, Stack, Typography, Divider, Grid, IconButton } from '@mui/material';
import Image from 'next/image';
import hifilogo from '@/public/hifi_logo.png';
import { categories } from '@/lib/data';
import Link from 'next/link';
import { Input, Button } from 'antd';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
                        <Stack spacing={2} sx={{ maxWidth: '300px' }} justifyContent="center">
                            <Image src={hifilogo} alt='Hifi Computer Logo' width={160} />
                            <Typography color="text.secondary" variant='body2' paragraph={true} component="body1">HIFI Computer is the most trusted and largest IT solution in Sylhet, Empowerong businesses and individuals by providing authorized products and reliable services</Typography>
                            <Typography variant='body2' paragraph={true} component="body1">Copyright HIFI Computer </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Stack spacing={1}>
                            <Typography variant='body1' color="primary" sx={{ pb: 1 }}>HIFI COMPUTER</Typography>
                            {
                                links.company.map((l, idx) => (
                                    <Link key={l.uri} href={l.uri}>
                                        <Typography color="text.secondary" variant='body2'>{l.title}</Typography>
                                    </Link>
                                ))
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
                            <Typography variant='body1'>Join Our Newsletter</Typography>
                            <Typography variant='body2' sx={{ mb: 2 }} color="text.secondary">Get exclusive deals directly to your inbox</Typography>
                            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                                <Input placeholder='Your Email' />
                                <Button type='primary'>Subscribe</Button>
                            </Stack>
                            <Stack direction="row" spacing={1}>
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
                {/* <Divider sx={{mt: 4}} /> */}
            </Container>
        </Box>
    )
}

export default Footer