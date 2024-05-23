import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import hifilogo from '@/public/f5s2df.svg';
import { Stack, Badge, IconButton, Button, Typography, Box, Divider } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import UserChip from './micro/UserChip';
import './styles/style.css';


function NavBar() {
  return (
    <AppBar className='mainappbar' position="static" color='transparent' elevation={1}>
      {/* <Box className="topstrip">
        <Stack>
          <Typography variant='body1'>Phone:</Typography>
        </Stack>
      </Box> */}
      <Toolbar sx={{ py: 1.5 }} >
        <Image src={hifilogo} alt='Hifi Computer Logo' width={60} />
        <Stack spacing={2} direction="row" alignItems="center" sx={{ flexGrow: 1, ml: 5, display: { xs: 'none', md: 'flex' } }}>
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
        <Stack sx={{ flexGrow: 0 }} alignItems="center" direction="row">
          <IconButton>
            <Badge badgeContent={0} color="primary" variant='dot'>
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>
          <Typography variant='body2'>Wishlist</Typography>
        </Stack>
        <Stack sx={{ flexGrow: 0, ml: 3 }} alignItems="center" direction="row">
          <IconButton>
            <Badge badgeContent={1} color="primary" variant='dot'>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
          <Stack>
            <Typography variant='body2'>My Cart</Typography>
            <Typography color="primary" variant='body2' fontSize="0.7rem">৳ 1200</Typography>
          </Stack>
        </Stack>
        <Divider orientation="vertical" sx={{mx: 4}} flexItem variant='middle' />
        <UserChip />
      </Toolbar>
      <Box className="product-categories">
        <div className="content">
          <ul>
            <li>
              <div className="cat-item">
                <div className="title">Laptop</div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="#">Apple</Link>
                    </li>
                    <li>
                      <Link href="#">Asus</Link>
                    </li>
                    <li>
                      <Link href="#">Acer</Link>
                    </li>
                    <li>
                      <Link href="#">Lenovo</Link>
                    </li>
                    <li>
                      <Link href="#">Dell</Link>
                    </li>
                    <li>
                      <Link href="#">Surface</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="cat-item">
                <div className="title">Gaming Laptop</div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="#">Dell</Link>
                    </li>
                    <li>
                      <Link href="#">Asus</Link>
                    </li>
                    <li>
                      <Link href="#">Acer</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="cat-item">
                <div className="title">Desktop PC</div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="#">Dell</Link>
                    </li>
                    <li>
                      <Link href="#">Asus</Link>
                    </li>
                    <li>
                      <Link href="#">Acer</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="cat-item">
                <div className="title">Components</div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="#">Processor</Link>
                    </li>
                    <li>
                      <Link href="#">Motherboard</Link>
                    </li>
                    <li>
                      <Link href="#">Casing</Link>
                    </li>
                    <li>
                      <Link href="#">Cooling Fan</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="cat-item">
                <div className="title">Category</div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="#">Processor</Link>
                    </li>
                    <li>
                      <Link href="#">Motherboard</Link>
                    </li>
                    <li>
                      <Link href="#">Casing</Link>
                    </li>
                    <li>
                      <Link href="#">Cooling Fan</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="cat-item">
                <div className="title">Category</div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="#">Processor</Link>
                    </li>
                    <li>
                      <Link href="#">Motherboard</Link>
                    </li>
                    <li>
                      <Link href="#">Casing</Link>
                    </li>
                    <li>
                      <Link href="#">Cooling Fan</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="cat-item">
                <div className="title">Category</div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="#">Processor</Link>
                    </li>
                    <li>
                      <Link href="#">Motherboard</Link>
                    </li>
                    <li>
                      <Link href="#">Casing</Link>
                    </li>
                    <li>
                      <Link href="#">Cooling Fan</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="cat-item">
                <div className="title">Category</div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="#">Processor</Link>
                    </li>
                    <li>
                      <Link href="#">Motherboard</Link>
                    </li>
                    <li>
                      <Link href="#">Casing</Link>
                    </li>
                    <li>
                      <Link href="#">Cooling Fan</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="cat-item">
                <div className="title">Category</div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="#">Processor</Link>
                    </li>
                    <li>
                      <Link href="#">Motherboard</Link>
                    </li>
                    <li>
                      <Link href="#">Casing</Link>
                    </li>
                    <li>
                      <Link href="#">Cooling Fan</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="cat-item">
                <div className="title">Category</div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="#">Processor</Link>
                    </li>
                    <li>
                      <Link href="#">Motherboard</Link>
                    </li>
                    <li>
                      <Link href="#">Casing</Link>
                    </li>
                    <li>
                      <Link href="#">Cooling Fan</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Box>
    </AppBar>
  );
}

export default NavBar;