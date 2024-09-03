'use client'

import React from 'react';
import TopSection from './TopSection';
import { Stack, Container } from '@mui/material';
import Image from 'next/image';
import banner from '@/public/images/main_banner.png'
import Typography from 'antd/es/typography/Typography';
import AboutHeadingItem from './micro/AboutHeadingItem';
import AboutInfo from './micro/AboutInfo';
import { about_us_data } from '@/lib/site_data';

const AboutUsPage = () => {
  return (
    <>
      <TopSection title="About Us" />
      <Container
        sx={{ py: 2 }}
      >
        <div
          style={{
            overflow: 'hidden',
            borderRadius: '10px'
          }}
        >
          <Image
            src={banner}
            quality={100}
          />
        </div>
        <Stack
          spacing={4}
          sx={{ mt: 4 }}
        >
          {
            about_us_data.heading.map((section, idx) => (
              <AboutHeadingItem
                key={idx}
                data={section}
                align={idx === 0 ? 'center' : 'left'}
                variant={idx === 0 ? 'h4' : 'h6'}
              />
            ))
          }
        </Stack>
        <Stack
          spacing={4}
          sx={{ mt: 4 }}
        >
          {
            about_us_data.sections.map((section, idx) => (
              <AboutInfo
                key={idx}
                data={section}
              />
            ))
          }
        </Stack>
      </Container>
    </>
  )
}

export default AboutUsPage