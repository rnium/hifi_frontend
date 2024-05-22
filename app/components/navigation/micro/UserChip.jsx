'use client'

import React from 'react';
import { Avatar, Typography, Stack } from '@mui/material';
import Link from 'next/link';

const UserChip = () => {
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
                sx={{ width: 36, height: 36 }}
                alt='Avatar'
            />
            <Link href="#">
                <Typography sx={{"&:hover": {color: 'primary'}}} >Login</Typography>
            </Link>
        </Stack>
    )
}

export default UserChip