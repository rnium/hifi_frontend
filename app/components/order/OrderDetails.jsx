import dateFormat from 'dateformat';

import {
  Box, Grid, Stack, Typography
} from '@mui/material';


import StatusChip from './micro/StatusChip';
import ItemsTable from './micro/ItemsTable';
import OrderStepper from './micro/OrderStepper';


const OrderDetails = ({ data, fetchOrder }) => {
  if (!data) {
    return null;
  }
  return (
    <>
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <Stack
            direction='row'
            spacing={1}
          >
            <Typography
              sx={{ fontWeight: 'bold' }}
            >
              Order No:
            </Typography>
            <Typography>
              {data.id}
            </Typography>
          </Stack>
          <Stack
            direction='row'
            spacing={1}
          >
            <Typography
              sx={{ fontWeight: 'bold' }}
            >
              Order ID:
            </Typography>
            <Typography
              color="text.secondary"
            >
              {data.oid}
            </Typography>
          </Stack>
          <Stack
            direction='row'
            spacing={1}
          >
            <Typography
              sx={{ fontWeight: 'bold' }}
            >
              Placed At:
            </Typography>
            <Typography
              color="text.secondary"
            >
              {
                dateFormat(data.added_at, 'h:MM TT, d/mm/yyyy')
              }
            </Typography>
          </Stack>
          <Stack
            direction='row'
            spacing={1}
          >
            <Typography
              sx={{ fontWeight: 'bold' }}
            >
              Status:
            </Typography>
            <StatusChip
              status={data.status}
            />
          </Stack>
        </Grid>
      </Grid>
      <Box
        sx={{ py: 3 }}
      >
        <OrderStepper
          status={data.status}
        />
      </Box>
      <ItemsTable
        cart={data.cart}
      />
    </>
  )
}

export default OrderDetails;