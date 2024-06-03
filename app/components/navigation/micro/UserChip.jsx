'use client'

import { useEffect, useState } from 'react';
import { Avatar, Typography, Stack, Skeleton } from '@mui/material';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

const UserChip = () => {
    const [isMounted, setisMounted] = useState(false);
    

    useEffect(() => {
        setisMounted(true);
    }, [])

    if (!isMounted) {
        return (
            <Stack direction="row" alignItems="center" spacing={1}>
                <Skeleton width="36px" height="36px" variant='circular' />
                <Stack spacing={0.5}>
                    <Skeleton width="100px" height="20px" variant='rounded' />
                    <Skeleton width="70px" height="10px" variant='rounded' />
                </Stack>
            </Stack>
        )
    }
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
                sx={{ width: 36, height: 36 }}
                alt='Avatar'
            />
            <Link href="/login">
                <Typography sx={{ "&:hover": { color: 'primary' } }} >User Login</Typography>
            </Link>
        </Stack>
    )
}

export default UserChip;