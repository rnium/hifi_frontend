import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import hifilogo from '@/public/f5s2df.svg';
import hifilogostripped from '@/public/hifi_logo_stripped.png';
import { Stack, Badge, IconButton, Button, Typography, Box, Divider, Container } from '@mui/material';
import Link from 'next/link';
import UserChip from './micro/UserChip';
import MobileMenu from './MobileMenu';
import SearchBox from './SearchBox';
import './styles/style.css';
import { RiFacebookCircleFill, RiGlobalFill, RiInstagramFill, RiLinkedinFill, RiMailOpenFill, RiMenuLine } from "@remixicon/react";
import { RiArrowDownSLine, RiCustomerService2Line } from '@remixicon/react';
import Categories from './Categories';
import CategoryNav from './micro/CategoryNav';
import Shoppingbtn from './Shoppingbtn';
import { getAPIData } from '@/utils/fetchData';
import { api_endpoints } from '@/lib/data';
import { links } from '@/lib/site_data';


const NavBar = async ({ homepage = false }) => {
  const mainCategories = await getAPIData(api_endpoints.main_categories, 'force-cache');
  const facebook = links?.socials.find(social => social.name === 'Facebook')
  return (
    <AppBar className='mainappbar border-b' position="static" style={{ backgroundColor: 'white' }} elevation={0}>
      <Box
        className="topstrip"
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <div className="t-item ">
              <RiGlobalFill
                size={20}
                className='icon'
              />
              <div className="text">www.hificomputerbd.com</div>
            </div>
            <div className="divider"></div>
            <div className="t-item social">
              <a href={facebook ? facebook.url : '#'} target='_blank'>
                <RiFacebookCircleFill
                  size={20}
                  className='icon'
                />
              </a>
            </div>
            <div className="t-item social">
              <a href="#">
                <RiInstagramFill
                  size={20}
                  className='icon'
                />
              </a>
            </div>
            <div className="t-item social">
              <a href="#">
                <RiLinkedinFill
                  size={20}
                  className='icon'
                />
              </a>
            </div>

          </Stack>
          <Stack direction="row" spacing={2}>
            <div className="t-item">
              <a href="mailto:hificomputerbd@gmail.com">
                <RiMailOpenFill
                  size={20}
                  className='icon'
                />
                <div className="text">hificomputerbd@gmail.com</div>
              </a>
            </div>
            <div className="t-item">
              <RiCustomerService2Line
                size={20}
                className='icon'
              />
              <div className="text phone-no">+8801973809453</div>
            </div>
          </Stack>
        </Container>
      </Box>
      <Toolbar sx={{ py: 2 }} >

        <Box
          sx={{
            width: '100%',
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
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
          sx={{ display: { xs: 'none', md: 'flex' }, width: '100%' }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <Link href="/">
              <Image src={hifilogo} alt='Hifi Computer Logo' width={60} />
            </Link>
            <Link href="/">
              <Typography className='brand' color="primary" variant='h4'>Hi-Fi Computer</Typography>
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
            <RiMenuLine
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
        {/* <ul className='navlinks' >
          {
            navLinks.map((l, idx) => (
              <Link href={l.uri}>
                <li key={idx}>
                  {l.title}
                </li>
              </Link>
            ))
          }
        </ul> */}
        <CategoryNav />
        <div className="search-btn"></div>
      </Container>
    </AppBar>
  );
}

export default NavBar;