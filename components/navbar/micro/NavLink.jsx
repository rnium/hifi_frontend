import React from 'react';
import { Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NavLink = ({startIcon, label, hasMenu=false}) => {
  return (
    <Stack className='nav-link' direction="row" spacing={1}>
        {startIcon}
        <Typography variant='body1'>{label}</Typography>
        {
            hasMenu ? 
            <ExpandMoreIcon className='nav-arrow' />: null
        }
    </Stack>
  )
}

export default NavLink