import React from 'react';
import {Typography, Box} from '@mui/material'

const AboutInfo = ({data}) => {
  return (
    <Box>
        <Typography
            variant='h5'
            color='primary'
            fontSize={{
              xs: '1rem',
              md: '1.5rem'
            }}
        >
            {data.title}
        </Typography>
        {
          data.paragraphs.map((p, idx) => (
            <Typography 
            key={idx}
            fontSize={
              {
                xs: '0.8rem',
                md: '1.2rem'
              }
            }
            
            >
              {p}
            </Typography>
          ))
        }
    </Box>
  )
}

export default AboutInfo