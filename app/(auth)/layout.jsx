import { Container, Grid, Box } from '@mui/material'
import Image from 'next/image';
import banner from '@/public/images/5573512_2919973.svg';
import NavBar from '../components/navigation/NavBar';
export default function AuthLayout({ children }) {
  return (
    <Box className="border-b">
      <NavBar />
      <Container sx={{ py: 10 }} >
        <Grid container justifyContent="center" alignItems="center" spacing={5}>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Image alt='Artwork' src={banner} />
          </Grid>
          <Grid item xs={12} md={6}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}