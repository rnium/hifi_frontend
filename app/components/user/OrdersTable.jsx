import React from 'react';
import { Empty } from "antd";
import dateFormat from 'dateformat';

import {
    Stack, Table, Paper, TableRow, TableHead,
    TableCell, TableBody, Pagination, TableContainer, Typography
} from '@mui/material';

const OrdersTable = ({ data, fetchOrders }) => {
    const orders = data?.results || [];
    if (!orders.length) {
        return (
            <Paper elevation={0}>
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{ height: 300 }}
                >
                    <Empty
                        description="No orders found"
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                    />
                </Stack>
            </Paper>
        )
    }
    return (
        <Paper
            elevation={0}
        >
            <Typography variant="h6" gutterBottom sx={{ p: 2 }}>
                My Orders
            </Typography>
            <TableContainer>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Order</TableCell>
                            <TableCell></TableCell>
                            <TableCell>Sub Total (Tk)</TableCell>
                            <TableCell>Placed At</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders.map((order, idx) => (
                                <TableRow key={idx} className="order">
                                    <TableCell>
                                        <img src={order.thumbnail} alt="Order Thumbnail" style={{ width: 50, height: 50 }} />
                                    </TableCell>
                                    <TableCell>{order.oid}</TableCell>
                                    <TableCell>{order.payable.toLocaleString('en-In')}</TableCell>
                                    <TableCell>{dateFormat(order.added_at, "mmmm dS, yyyy, h:MM:ss TT")}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <Stack
                    sx={{ px: 1, py: 0.5 }}
                    alignItems="flex-end"
                >
                    <Pagination
                        count={data?.total_pages || 1}
                        page={data?.current_page || 1}
                        onChange={(e, v) => {
                            fetchOrders({
                                page: v
                            })
                        }}
                    />
                </Stack>
            </TableContainer>
        </Paper>

    )
}

export default OrdersTable;