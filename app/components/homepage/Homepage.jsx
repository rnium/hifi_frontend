import React from 'react';
import { ReduxProvider } from "@/redux/store";
import { Grid, Container } from '@mui/material';
import Carousel from './Carousel';
import ProductSection from './ProductSection';
import './styles/style.css';
import NavBar from '../navigation/NavBar';
import ProductGlimpse from './ProductGlimpse';
import { getAPIData } from '@/utils/fetchData';
import { api_endpoints } from '@/lib/data';


const Homepage = async () => {
  const data = await getAPIData(api_endpoints.homepage, 'no-store');
  return (
    <div>
      <NavBar homepage={true} />
      <Container
        sx={{
          mt: { xs: 1, md: 4 },
          px: { xs: 2, md: 0 }
        }}
      >
        <ProductGlimpse />
        <Grid container spacing={3}>
          <Grid item xs={0} md={3}>
          </Grid>
          <Grid item xs={12} md={9}>
            <Carousel carousel_data={data.carousels} />
          </Grid>
        </Grid>
        {
          data.collections.map((collection, idx) => (
            <ProductSection key={idx} section_data={collection} />
          ))
        }
      </Container>
    </div>
  )
}

export default Homepage;