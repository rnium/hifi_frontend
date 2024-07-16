import React from 'react';
import { Grid, Container } from '@mui/material';
import Carousel from './Carousel';
import ProductSection from './ProductSection';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import './styles/style.css';
import NavBar from '../navigation/NavBar';
import { getAPIData } from '@/utils/fetchData';
import { api_endpoints } from '@/lib/data';


const Homepage = async () => {
  const data = await getAPIData(api_endpoints.homepage, 'no-store');
  return (
    <div>
      <NavBar homepage={true} />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={0} md={3}>
            {/* <Categories /> */}
          </Grid>
          <Grid item xs={12} md={9}>
            <Carousel carousel_data={data.carousels} />
          </Grid>
        </Grid>
        <ProductSection title="Trending Products" icon={<TrendingUpIcon color='secondary' fontSize='medium' />} />
        <ProductSection title="Featured Products" icon={<BookmarksOutlinedIcon color='secondary' fontSize='medium' />} />
      </Container>
    </div>
  )
}

export default Homepage;