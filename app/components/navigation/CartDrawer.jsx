import * as React from 'react';
import { Empty } from 'antd';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ProductC from './micro/ProductC';
import { Typography, Stack, Chip, Divider } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAddToCart } from '@/hooks/useCart';
import { useRemoveFromCart } from '@/hooks/useCart';



export default function CartDrawer({ open, setOpen, cartInfo, prodData, totalAmount, totalItems }) {
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const addToCart = useAddToCart();
  const { removeProduct, decrementFromCart } = useRemoveFromCart();
  const router = useRouter();

  const handleCheckoutClick = () => {
    router.push('/checkout');
    setOpen(false);
  }

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
              {totalItems} Item{totalItems === 1 ? '' : 's'}
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
          >
            <Typography variant="body1" color="text.secondary">Total: {totalAmount.toLocaleString('en-in') + "৳"}</Typography>
            <Chip
              label="Checkout"
              size='small'
              disabled={totalItems === 0}
              color='secondary'
              icon={<ShoppingCartCheckoutIcon />}
              onClick={handleCheckoutClick}
              sx={{ px: 1 }}
            />
          </Stack>
        </Box>
        {
          prodData.length == 0 ?
            <Stack
              sx={{ py: 10 }}
            >
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <Typography>Empty Cart</Typography>
                }
              />
            </Stack> :
            <Stack sx={{ mt: 1 }} spacing={1} >
              {
                prodData.map((p, idx) => (
                  <ProductC
                    key={idx}
                    product={p}
                    cartInfo={cartInfo}
                    addToCart={addToCart}
                    removeProduct={removeProduct}
                    decrementFromCart={decrementFromCart}
                  />
                ))
              }
            </Stack>
        }

      </Box>
    </Drawer>
  );
}