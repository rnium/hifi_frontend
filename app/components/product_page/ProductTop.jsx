import {
    Stack, Chip, Typography,
    Grid, Rating, List, ListItem, ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { ErrorOutline } from '@mui/icons-material';
import Link from 'next/link';
import './styles/style.css';
import ProductAction from './ProductAction';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DisplayImage from './mircro/DisplayImage';


const ProductTop = ({ product }) => {
    return (
        <Grid container spacing={4} >
            <Grid item xs={12} md={5}>
                <DisplayImage images={product.images} />
            </Grid>
            <Grid item xs={12} md={7}>
                <Stack spacing={1}>
                    <Typography
                        variant='h5'
                        fontSize={{ xs: '1.2rem', md: '1.5rem' }}
                    >
                        {product.title}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        {
                            product.in_stock ?
                                <Chip
                                    label="In Stock"
                                    icon={<CheckIcon />}
                                    size='small'
                                    color='secondary'
                                    sx={{ p: 1 }}
                                /> :
                                <Chip
                                    label="Out of Stock"
                                    icon={<ErrorOutline />}
                                    size='small'
                                    color='error'
                                    variant='outlined'
                                    sx={{ p: 1 }}
                                />
                        }
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Rating
                            value={product.rating}
                            max={5}
                            precision={0.1}
                            readOnly
                        />
                        <Link href="#">
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography variant='body1' container="span">{product.rating}</Typography>
                                <Typography variant='body2' container="span" color="text.secondary">out of {product.num_ratings} Reviews</Typography>
                            </Stack>
                        </Link>
                    </Stack>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <Stack direction="row" spacing={1} alignItems="flex-start">
                            <Typography variant='h6' color="text.secondary">৳</Typography>
                            <Typography
                                variant='h4'
                                fontSize={{ xs: '1.5rem', md: '2rem' }}
                            >
                                {product?.priceSale ? product.priceSale.toLocaleString("en-IN") : product.price.toLocaleString("en-IN")}
                            </Typography>
                        </Stack>
                        {
                            product?.priceSale ?
                                <Typography
                                    variant='h6'
                                    className='line-through decoration-gray-400'
                                    color="text.secondary"
                                    fontSize={{ xs: '1.2rem', md: '1.4rem' }}
                                >
                                    {product.price.toLocaleString("en-IN")}
                                </Typography> : null
                        }
                    </Stack>
                    <List dense={true}>
                        {
                            product.key_features.map((f, idx) => (
                                <ListItem key={idx} dense={true} sx={{ px: 0, py: 0.1 }}>
                                    <CheckCircleOutlineIcon color='info' sx={{ mr: 1 }} />
                                    <ListItemText>
                                        {f}
                                    </ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                    <ProductAction product={product} />
                </Stack>

            </Grid>
        </Grid>
    )
}

export default ProductTop