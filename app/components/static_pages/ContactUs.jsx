'use client';

import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Stack,
  Link
} from '@mui/material';
import { RiPhoneFill, RiMailFill, RiMapPin5Fill } from '@remixicon/react';
import { styled } from '@mui/material/styles';
import MapIcon from '@mui/icons-material/Map';
import { mapEmbedUrl } from '@/lib/data';


const ContactPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
}));

const MapContainer = styled(Box)({
  height: '400px',
  width: '100%',
  marginTop: '20px',
  marginBottom: '20px',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
});

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  transition: 'all 0.3s ease',
  borderRadius: theme.shape.borderRadius * 3,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[2],
  },
}));

const ContactUs = () => {
  const contactItems = [
    {
      icon: <RiPhoneFill size={50} color="#d32f2f" />,
      title: "Phone",
      content: "+8801973809453",
      link: "tel:+8801973809453"
    },
    {
      icon: <RiMailFill size={50} color="#d32f2f" />,
      title: "Email",
      content: "hificomputerbd@gmail.com",
      link: "mailto:hificomputerbd@gmail.com"
    },
    {
      icon: <RiMapPin5Fill size={50} color="#d32f2f" />,
      title: "Address",
      content: "Sylhet, Bangladesh",
      link: "https://goo.gl/maps/..."
    }
  ];

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mt: 4 }}
      >
        Contact Us
      </Typography>

      <Typography variant="h6" align="center" paragraph color="text.secondary">
        Hi-Fi Computer - Your trusted IT retailer in Sylhet Division
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2, mb: 4 }}>
        {contactItems.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Link href={item.link} underline="none">
              <ContactCard elevation={0}>
                <Stack justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
                  {item.icon}
                </Stack>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.content}
                </Typography>
              </ContactCard>
            </Link>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" align="center" gutterBottom sx={{ mt: 4 }}>
        <MapIcon color="primary" sx={{ verticalAlign: 'middle', mr: 1 }} />
        Find Us
      </Typography>

      <MapContainer>
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hi-Fi Computer Location"
        />
      </MapContainer>

      <Typography variant="body2" align="center" color="text.secondary" sx={{ my: 4 }}>
        Visit us for the best IT products and services in Bangladesh!
      </Typography>
    </Container>
  );
};

export default ContactUs;