'use client'

import { useState } from 'react';
import { Stack, Typography, Container, Box, useMediaQuery } from '@mui/material';
import { Input, Button } from "antd";

const OrderIdInput = ({ setUrl }) => {
    const [orderId, setOrderId] = useState('');
    const isMobile = useMediaQuery('(max-width:756px)');
    const handleTrackOrder = () => {
        setUrl(orderId);
    }
    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row', my: 7, gap: 3 }}>
                {!isMobile && (
                    <video
                        src="/videos/delivery-by-robot.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: "500px", height: "auto" }}
                    />
                )}
                <Stack direction="column" alignItems="center" spacing={2}>
                    <Typography variant={isMobile ? "h5" : "h4"}>Track Your Order</Typography>
                    <Typography variant="body1" sx={{ textAlign: isMobile ? 'center' : 'left' }}>Enter order ID to track your order</Typography>
                    <Stack direction={isMobile ? "column" : "row"} spacing={2} alignItems="center" sx={{ pt: 4 }}>
                        <Input
                            placeholder="Order ID"
                            style={{ width: isMobile ? '100%' : 300 }}
                            value={orderId}
                            onChange={e => setOrderId(e.target.value)}
                        />
                        <Button
                            type="primary"
                            onClick={handleTrackOrder}
                            style={{ width: isMobile ? '100%' : 'auto' }}
                        >
                            Track Order
                        </Button>
                    </Stack>
                </Stack>
                {isMobile && (
                    <video
                        src="/videos/delivery-by-robot.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: "500px", height: "auto" }}
                    />
                )}
            </Box>
        </Container>
    )
}

export default OrderIdInput;