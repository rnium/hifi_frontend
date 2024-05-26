'use client'

import { Fragment } from 'react';
import {
    Container, Stack, Chip, Box, Typography,
    Grid, Rating, List, ListItem, ListItemText,
    TableContainer, Table, TableBody, TableRow, TableCell,
    Alert, TextField, Divider, Button
} from '@mui/material';
import { styled } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';
import './styles/style.css';
import { product1 } from '@/lib/dev_data';
import ProductAction from './ProductAction';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Empty } from 'antd';
import DisplayImage from './mircro/DisplayImage';
import Review from './mircro/Review';
import Question from './mircro/Question';
import ReviewForm from './mircro/ReviewForm';
import QuestionForm from './mircro/QuestionForm';
const product_data = product1;


const DataCell = styled(TableCell)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    'td': {
        border: 0,
    },
}));


const Product = () => {
    return (
        <Container sx={{ mt: 5, mb: 10 }}>
            <Box sx={{ bgcolor: '#ffffff', borderRadius: '10px', px: 3, py: 4 }} >
                <Grid container spacing={4} >
                    <Grid item xs={12} md={5}>
                        <DisplayImage images={product_data.images} />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Stack spacing={1}>
                            <Typography variant='h5'>Lenovo Legion Slim 5i 16IRH8 Intel Core i5 13500H 16GB RAM, 512GB SSD 16 Inch 2.5K QHD WQXGA Display Storm Grey Gaming Laptop</Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    label="In Stock"
                                    icon={<CheckIcon />}
                                    size='small'
                                    color='secondary'
                                    sx={{ p: 1 }}
                                />
                                <Chip
                                    label="Brand: Lenovo"
                                    size='small'
                                    color='secondary'
                                    variant='outlined'
                                    sx={{ p: 1 }}
                                />
                            </Stack>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Rating
                                    value={3.5}
                                    max={5}
                                    precision={0.1}
                                    readOnly
                                />
                                <Link href="#">
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Typography variant='body1' container="span">3.5</Typography>
                                        <Typography variant='body2' container="span" color="text.secondary">out of 156 Reviews</Typography>
                                    </Stack>
                                </Link>
                            </Stack>
                            <Stack direction="row" spacing={3} alignItems="center">
                                <Stack direction="row" spacing={1} alignItems="flex-start">
                                    <Typography variant='h6' color="text.secondary">৳</Typography>
                                    <Typography variant='h4' color="">1,75,000</Typography>
                                </Stack>
                                <Typography variant='h6' className='line-through decoration-gray-400' color="text.secondary">1,87,000</Typography>
                            </Stack>
                            <List dense={true}>
                                {
                                    product_data.key_features.map((f, idx) => (
                                        <ListItem key={idx} dense={true} sx={{ px: 0, py: 0.1 }}>
                                            <CheckCircleOutlineIcon color='info' sx={{ mr: 1 }} />
                                            <ListItemText>
                                                {f}
                                            </ListItemText>
                                        </ListItem>
                                    ))
                                }
                            </List>
                            <ProductAction product={product_data} />
                        </Stack>

                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ bgcolor: '#ffffff', borderRadius: '10px', p: 3 }}>
                            <Typography
                                variant='h6'
                                color="primary"
                                sx={{ mb: 1 }}
                            >
                                Laptop Specifications
                            </Typography>
                            <Fragment>
                                <TableContainer sx={{ mb: 2 }}>
                                    <Table>
                                        <TableBody>
                                            <StyledTableRow>
                                                <TableCell sx={{ px: 0 }} colSpan={2}>
                                                    <Alert sx={{ mx: 0 }} icon={false} severity='error'>
                                                        Quick Overview
                                                    </Alert>
                                                </TableCell>
                                            </StyledTableRow>
                                            <TableRow>
                                                <DataCell>Spec Title</DataCell>
                                                <DataCell>Lorem ipsum dolor sit amet consectetur adipisicing.</DataCell>
                                            </TableRow>
                                            <TableRow>
                                                <DataCell>Spec Title</DataCell>
                                                <DataCell>Lorem ipsum dolor sit amet consectetur adipisicing.</DataCell>
                                            </TableRow>
                                            <TableRow>
                                                <DataCell>Spec Title</DataCell>
                                                <DataCell>Lorem ipsum dolor sit amet consectetur adipisicing.</DataCell>
                                            </TableRow>
                                            <StyledTableRow >
                                                <TableCell sx={{ px: 0 }} colSpan={2}>
                                                    <Alert sx={{ mx: 0, mt: 2 }} icon={false} severity='error'>
                                                        Display
                                                    </Alert>
                                                </TableCell>
                                            </StyledTableRow>
                                            <TableRow>
                                                <DataCell>Spec Title</DataCell>
                                                <DataCell>Lorem ipsum dolor sit amet consectetur adipisicing.</DataCell>
                                            </TableRow>
                                            <TableRow>
                                                <DataCell>Spec Title</DataCell>
                                                <DataCell>Lorem ipsum dolor sit amet consectetur adipisicing.</DataCell>
                                            </TableRow>
                                            <TableRow>
                                                <DataCell>Spec Title</DataCell>
                                                <DataCell>Lorem ipsum dolor sit amet consectetur adipisicing.</DataCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Fragment>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ bgcolor: '#ffffff', borderRadius: '10px', p: 3 }}>
                            <Typography
                                variant='h6'
                                color="primary"
                                sx={{mb: 1}}
                            >
                                Customer Reviews
                            </Typography>
                            {
                                product_data.reviews.length > 0 ?
                                    product_data.reviews.map(r => (
                                        <Review sx={{ mb: 1.5, p: 1 }} review={r} />
                                    )) :
                                    <Stack justifyContent="center" alignItems="center" sx={{my: 5}}>
                                        <Empty 
                                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                                            description = {<Typography variant='body1'>No Reviews Yet</Typography>}
                                        />
                                    </Stack>
                            }

                            <Divider sx={{ my: 2 }} />
                            <ReviewForm />
                        </Box>
                        <Box sx={{ bgcolor: '#ffffff', borderRadius: '10px', mt: 2, p: 3 }}>
                            <Typography
                                variant='h6'
                                color="primary"
                                sx={{mb: 1}}
                            >
                                Questions
                            </Typography>
                            {
                                product_data.reviews.length > 0 ?
                                    product_data.questions.map(r => (
                                        <Question sx={{ mb: 1.5, p: 1 }} question={r} />
                                    )) :
                                    <Stack justifyContent="center" alignItems="center" sx={{my: 5}}>
                                        <Empty 
                                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                                            description = {<Typography variant='body1'>No Questions Yet</Typography>}
                                        />
                                    </Stack>
                            }

                            <Divider sx={{ my: 2 }} />
                            <QuestionForm />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Product