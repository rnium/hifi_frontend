import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ProductC from './micro/ProductC';
import ProductW from './micro/ProductW';
import { products } from '@/lib/data';
import { Typography, Stack } from '@mui/material';


const all_products = [products[0], products[2], products[1]]

export default function CartDrawer({ open, setOpen }) {
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
      <Box sx={{ width: { xs: '250px', md: '350px' } }} role="presentation" className='p-3'>
        <Typography variant="h5">My Cart</Typography>
        <Typography
          variant='caption'
          sx={{ mb: 1 }}
          component="div"
          color="text.secondary"
        >
          3 Items
        </Typography>
        <Stack spacing={1} >
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