import { Typography, List, ListItem, ListItemIcon, Box, ListItemText } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';

const AboutHeadingItem = ({ data, align, variant }) => {
  if (typeof (data) === 'string') {
    return (
      <Typography
        variant={variant}
        textAlign={align}
        fontSize={
          variant === 'h6' ?
          (
            {
              xs: '1rem',
              md: '1.5rem'
            }
          )
          :
          (
            {
              xs: '1.5rem',
              md: '2rem'
            }
          )
        }
      >
        {data}
      </Typography>
    )
  }
  return (
    <Box>
      <Typography
        variant='h6'
        fontSize={{
          xs: '1rem',
          md: '1.5rem'
        }}
      >
        {data.paragraph}
      </Typography>
      <List>
        {
          data.sub_paragraphs.map((p, idx) => (
            <ListItem key={idx}>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText 
                primary={p}
              />
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default AboutHeadingItem