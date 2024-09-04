import {
    Container, Paper, Stack, Typography, Breadcrumbs
} from '@mui/material';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const TopSection = ({ title, title_large="", show_title=false }) => {
    return (
        <Paper
            sx={{ py: 2, px: 2 }}
            elevation={0}
            className='border'
        >
            <Container>
                <Stack direction="row" justifyContent="space-between" alignItems='center'>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize='small' />}
                    >
                        <Link href='/'>
                            <HomeIcon className='hover:text-red-600' />
                        </Link>
                        <Link href="#">
                            <Typography
                                variant='body2'
                            >
                                {title}
                            </Typography>
                        </Link>
                    </Breadcrumbs>
                </Stack>
                {
                    Boolean(title_large) && (
                        <Typography
                            sx={{my: 4}}
                            variant="h5"
                            textAlign="center"
                            fontSize={{
                                xs: '1.2rem',
                                md: '1.5rem'
                              }}
                        >
                            {title_large}
                        </Typography>
                    )
                }
            </Container>
        </Paper>
    )
}

export default TopSection