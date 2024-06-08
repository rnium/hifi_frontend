import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ProductC from './micro/ProductC';
import ProductW from './micro/ProductW';
import { products } from '@/lib/data';
import { Typography, Stack, Chip, Divider } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Link from 'next/link';


const all_products = [products[0], products[2], products[1]];

const cartTotal = 252003

export default function CartDrawer({ open, setOpen }) {
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
      <Box sx={{ width: { xs: '250px', md: '350px' }, mt: 1.5 }} role="presentation" className='p-3'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Stack>
            <Typography variant="h5">My Cart</Typography>
            <Typography
              variant='caption'
              sx={{ mb: 1 }}
              component="div"
              color="text.secondary"
            >
              3 Items
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
          >
            <Typography variant="body1" color="text.secondary">Total: {cartTotal.toLocaleString('en-in') + "৳"}</Typography>
            <Link
              href="#"
            >
              <Chip
                label="Checkout"
                size='small'
                
                color='secondary'
                icon={<ShoppingCartCheckoutIcon />}
                sx={{ px: 1 }}
              />
            </Link>
          </Stack>
        </Box>
        <Stack sx={{mt: 1}} spacing={1} >
          {
            all_products.map(p => (
              <ProductC product={p} />
            ))
          }
        </Stack>
      </Box>
    </Drawer>
  );
}