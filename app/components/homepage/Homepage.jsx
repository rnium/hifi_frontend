import React from 'react';
import { ReduxProvider } from "@/redux/store";
import { Grid, Container } from '@mui/material';
import Marquee from 'react-fast-marquee';
import Carousel from './Carousel';
import ProductSection from './ProductSection';
import './styles/style.css';
import NavBar from '../navigation/NavBar';
import ProductGlimpse from './ProductGlimpse';
import FeaturedCategories from './FeaturedCategories';
import PointCard from './PointCard';
import { getAPIData } from '@/utils/fetchData';
import { api_endpoints, key_points, marquee_message } from '@/lib/data';



const Homepage = async () => {
  const data = await getAPIData(api_endpoints.homepage, 'no-store');
  return (
    <div>
      <NavBar homepage={true} />
      <Container
        sx={{
          mt: { xs: 1, md: 4 },
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
        <Grid
          container
          spacing={3}
          sx={{ my: 2 }}
        >
          {
            key_points.map((kp, idx) => (
              <Grid
                item
                key={idx}
                sx={{display: {xs: 'none', md: 'block'}}}
                md={3}
              >
                <PointCard
                  data={kp}
                />
              </Grid>
            ))
          }
          <Grid item
            xs={12}
          >
            <div className='bg-white px-3 py-2 rounded-full'>
              <Marquee 
                className='text-slate-700 max-sm:text-xs'
                delay={2}
              >
                {marquee_message}
              </Marquee>
            </div>
          </Grid>
        </Grid>
        <FeaturedCategories sx={{ mt: 3, mb: 6 }} />
        {
          data.collections.map((collection, idx) => (
            <ProductSection key={idx} section_data={collection} show_x={collection.slug === 'featured'} />
          ))
        }
      </Container>
    </div>
  )
}

export default Homepage;