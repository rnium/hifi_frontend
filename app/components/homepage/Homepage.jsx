import React from 'react';
import { Grid, Container } from '@mui/material';
import Carousel from './Carousel';
import Categories from './Categories';
import ProductSection from './ProductSection';
import './styles/style.css';

const Homepage = () => {
  return (
    <div>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={0} md={3}>
            <Categories />
          </Grid>
          <Grid item xs={12} md={9}>
            <Carousel />
          </Grid>
        </Grid>
        <ProductSection />
      </Container>
    </div>
  )
}

export default Homepage;