import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Image from 'next/image';
import hifilogo from '@/public/hifi_logo.png';
import NavLink from './micro/NavLink';
import DevicesIcon from '@mui/icons-material/Devices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import '@/components/navbar/style.css'
import { Stack, Badge, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function ResponsiveAppBar() {

  return (
    <AppBar position="static" color='transparent' elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={hifilogo} alt='Hifi Computer Logo' width={150} />
          <Stack spacing={2} direction="row" sx={{ flexGrow: 1, ml: 5, display: { xs: 'none', md: 'flex' } }}>
            <NavLink startIcon={<DevicesIcon />} label="Products" hasMenu={true} />
            <NavLink startIcon={<SupportAgentIcon />} label="Contact" />
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
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;