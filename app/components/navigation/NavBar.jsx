import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Image from 'next/image';
import hifilogo from '@/public/hifi_logo.png';
import NavLink from './micro/NavLink';
import DevicesIcon from '@mui/icons-material/Devices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Stack, Badge, IconButton, Button, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import './styles/style.css';


function NavBar() {
  return (
    <AppBar className='mainappbar' position="static" color='transparent' elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 2 }}>
          <Image src={hifilogo} alt='Hifi Computer Logo' width={150} />
          <Stack spacing={2} direction="row" alignItems="center" sx={{ flexGrow: 1, ml: 5, display: { xs: 'none', md: 'flex' } }}>
            <NavLink startIcon={<DevicesIcon />} label="Products" hasMenu={true}>
              <div className='category-menu'>
                <div className="content">
                  <ul>
                    <li>
                      <Link href="#" className='category-link'>Laptop</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </NavLink>
            <div className='searchbox'>
              <input
                type="text"
                placeholder='Search Product'
              // value={registration}
              // onKeyDown={handleKeyDown}
              // onChange={event => setRegistration(event.target.value)}
              />
              <IconButton size='small'>
                <SearchIcon />
              </IconButton>
            </div>

          </Stack>

          <Stack sx={{ flexGrow: 0 }} direction="row" spacing={1}>
            <IconButton>
              <Badge badgeContent={0} color="success">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={0} color="success">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <Button color='success' >Login</Button>
            <Button color='success' variant='outlined'>Signup</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;