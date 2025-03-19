import dateFormat from 'dateformat';

import {
  Box, Grid, Stack, Typography, Container
} from '@mui/material';


import StatusChip from '../order/micro/StatusChip';
import ItemsTable from '../order/micro/ItemsTable';
import OrderStepper from '../order/micro/OrderStepper';


const OrderDetails = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <Container sx={{ my: 10 }}>
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={12} md={6}>
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
              status={data.status.charAt(0).toUpperCase() + data.status.slice(1)}
            />
          </Stack>
        </Grid>
      </Grid>
      <Box
        sx={{ py: 5 }}
      >
        <OrderStepper
          status={data.status}
        />
      </Box>
      <ItemsTable
        cart={data.cart}
      />
    </Container>
  )
}

export default OrderDetails;