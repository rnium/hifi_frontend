import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { Stack } from '@mui/material';

const Spinner = ({py=10, description="Loading.. Please Wait"}) => {
  return (
    <Stack sx={{py: py}} justifyContent="center" alignItems="center">
        <CircularProgress disableShrink />
        <Typography variant="body2" color="textSecondary" sx={{mt: 2}}>
            {description}
        </Typography>
    </Stack>
  )
}

export default Spinner