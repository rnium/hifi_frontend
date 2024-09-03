import {
    Container, Paper, Stack, Typography, Breadcrumbs
} from '@mui/material';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const TopSection = ({ title }) => {
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
            </Container>
        </Paper>
    )
}

export default TopSection