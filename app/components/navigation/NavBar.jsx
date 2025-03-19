import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import hifilogostripped from '@/public/hifi_logo_stripped.png';
import { Stack, Box, Divider, Container } from '@mui/material';
import Link from 'next/link';
import UserChip from './micro/UserChip';
import MobileMenu from './MobileMenu';
import SearchBox from './SearchBox';
import './styles/style.css';
import { RiArrowDownSLine, RiMenu2Line } from '@remixicon/react';
import Categories from './Categories';
import CategoryNav from './micro/CategoryNav';
import Shoppingbtn from './Shoppingbtn';
import { getAPIData } from '@/utils/fetchData';
import { api_endpoints } from '@/lib/data';
import { nav_links } from '@/lib/data';
import NavLink from './NavLink';

const NavBar = async ({ homepage = false }) => {
  const mainCategories = await getAPIData(
    api_endpoints.main_categories,
    null,
    60
  );
  return (
    <AppBar className='mainappbar border-b' position="static" style={{ backgroundColor: 'white' }} elevation={0}>
      <Toolbar sx={{ py: 2, backgroundColor: '#22223b' }} >

        <Box
          sx={{
            width: '100%',
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <MobileMenu cat_data={mainCategories} />
          <Box>
            <Link href="/">
              <Image src={hifilogostripped} alt="HiFi Logo" width={130} />
            </Link>
          </Box>
          <Box
          >
            <Shoppingbtn />
          </Box>

        </Box>

        <Box
          sx={{ display: { xs: 'none', md: 'flex' }, width: '100%', px: 6 }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <Link href="/">
              <Image src={hifilogostripped} alt="HiFi Logo" width={200} />
            </Link>
          </Stack>

          <Stack spacing={2} direction="row" alignItems="center" sx={{ flexGrow: 1, ml: 5, display: { xs: 'none', md: 'flex' } }}>
            <SearchBox />
          </Stack>
          <Shoppingbtn />

          <Divider orientation="vertical" sx={{ mx: 4 }} flexItem variant='middle' />
          <UserChip />
        </Box>

      </Toolbar>
      <Divider />
      <Container sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: "row", alignItems: 'center' }}>
        <div className={homepage ? 'category-container homepage' : 'category-container'} >
          <div className="btn">
            <RiMenu2Line
              size={24}
              className='icon'
            />
            <div className="title">Browse Categories</div>
            <RiArrowDownSLine
              size={20}
              className='arrow-icon'
            />
          </div>
          <div className="cat-menu-container">
            <Categories cat_data={mainCategories} />
          </div>
        </div>
      
        <CategoryNav />
        <Divider orientation="vertical" sx={{ mx: 3 }} flexItem variant='middle' />
        <Stack direction="row" spacing={2} alignItems="center">
          {nav_links.map((link, index) => (
            <NavLink key={index} {...link} />
          ))}
        </Stack>

      </Container>
    </AppBar>
  );
}

export default NavBar;