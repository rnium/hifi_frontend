import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { Input, Button } from "antd";

const OrderIdInput = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', my: 7, gap: 3 }}>
            <video
                src="/videos/delivery-by-robot.webm"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "500px", height: "auto" }} // Set width to 300px
            />
            <Stack direction="column" alignItems="center" spacing={2}>

                <Typography variant="h4" >Track Your Order</Typography>
                <Typography variant="body1" >Enter order ID to track your order</Typography>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 4 }}>
                    <Input placeholder="Order ID" style={{ width: 300 }} />
                    <Button>Track Order</Button>
                </Stack>
            </Stack>

        </Box>
    )
}

export default OrderIdInput