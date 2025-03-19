import { Image } from 'antd';
import Link from 'next/link';

import {
    Paper, Stack, Table, TableRow, TableHead,
    TableCell, TableBody, Typography, TableContainer
} from '@mui/material';

const ItemsTable = ({ cart }) => {
    const { products } = cart;
    return (
        <Paper
            elevation={1}
        >
            <Typography
                sx={{ py: 1, px: 2 }}
                variant="h6"
                color="text.secondary"
            >
                Ordered Products
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Unit Price</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            products.map((itm, idx) => (
                                <TableRow
                                    key={idx}
                                >
                                    <TableCell>
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                        >
                                            <Image
                                                src={itm.product.cover}
                                                width={100}
                                            />

                                            <Stack>
                                                <Link href={`/product/${itm.product.slug}`}>
                                                    <Typography>
                                                        {itm.product.title.length > 70 ? itm.product.title.slice(0, 70) + '...' : itm.product.title}
                                                    </Typography>
                                                </Link>
                                            </Stack>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        {itm.quantity}
                                    </TableCell>
                                    <TableCell>
                                        {itm.product.priceSale}
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            sx={{ fontWeight: 'bold' }}
                                            color="text.secondary"
                                        >
                                            {
                                                (itm.product.priceSale ?? 1) * (itm.quantity ?? 1)
                                            }
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default ItemsTable;