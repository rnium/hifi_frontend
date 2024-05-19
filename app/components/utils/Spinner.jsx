import React from 'react';
import { Spin } from 'antd';
import { Stack } from '@mui/material';

const Spinner = ({py=10}) => {
  return (
    <Stack sx={{py: py}}>
        <Spin size='large' />
    </Stack>
  )
}

export default Spinner