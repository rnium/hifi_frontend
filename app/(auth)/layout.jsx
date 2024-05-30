import { Container, Grid, Paper, Stack, Typography, TextField, Box, Button, Divider } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import hifilogo from '@/public/f5s2df.svg';
import banner from '@/public/images/20547283_6310505.svg';

export default function AuthLayout({ children }) {
    return (
        <Box className="border-b">
        <Container sx={{ py: 10 }} >
          <Grid container justifyContent="center" alignItems="center" spacing={5}>
            <Grid item xs={12} md={6}>
              <Image src={banner} />
            </Grid>
            <Grid item xs={12} md={6}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }