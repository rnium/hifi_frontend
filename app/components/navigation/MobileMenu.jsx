'use client'

import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { RiMenuLine } from '@remixicon/react';
import { List, Stack, Chip, Divider, ListItem, IconButton, ListItemText, ListItemIcon, Typography } from '@mui/material';
import Link from 'next/link';
import { RiCloseLargeLine } from '@remixicon/react';
import CategoryIcon from '@mui/icons-material/Category';
import { cat_icon_mapping } from '@/lib/data';


export default function MobileMenu({ cat_data }) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
      >
        <RiMenuLine />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='left'>
        <Box sx={{ width: { xs: '250px', md: '350px' } }} role="presentation" className='p-3'>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography
              variant='h6'
              sx={{ fontSize: '0.9rem' }}
              color='text.secondary'
            >
              Main Categories
            </Typography>
            <IconButton
              onClick={() => setOpen(false)}
            >
              <RiCloseLargeLine
                size={20}
              />
            </IconButton>
          </Stack>
          <Divider sx={{ mt: 1 }} />
          <List 
            disablePadding
          >
            {
              cat_data.map((cat, idx) => (
                <Link key={idx} href={`/category/${cat.slug}`}>
                  <ListItem onClick={() => setOpen(false)} disableGutters>
                    <ListItemIcon
                      sx={{p: 0, m: 0}}
                    >
                      {cat_icon_mapping[cat.slug] || <CategoryIcon />}
                    </ListItemIcon>
                    <ListItemText sx={{fontSize: '0.7rem'}} className='cat-text' primary={cat.title} />
                  </ListItem>
                </Link>
              ))
            }
          </List>
        </Box>
      </Drawer>
    </>
  );
}