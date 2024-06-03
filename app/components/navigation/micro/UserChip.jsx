'use client'

import { useEffect, useState } from 'react';
import { Avatar, Typography, Stack, Skeleton } from '@mui/material';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useUser } from '@/hooks/useUser';


const UserChip = () => {
    const { userInfo, userIsAuthenticated, userIsLoaded, loadingUser } = useUser();

    if (!userIsLoaded) {
        return (
            <Stack direction="row" alignItems="center" spacing={1}>
                <Skeleton width="40px" height="40px" variant='circular' />
                <Stack spacing={0.5}>
                    <Skeleton width="70px" height="10px" variant='rounded' />
                    <Skeleton width="100px" height="20px" variant='rounded' />
                </Stack>
            </Stack>
        )
    }
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            {
                userIsAuthenticated ?
                    <>
                        <Avatar
                            sx={{ width: 40, height: 40 }}
                            alt='Avatar'
                        />
                        <Stack justifyItems="center">
                        <Typography variant='caption' color="text.secondary" sx={{ "&:hover": { color: 'primary' }, fontSize: '0.7rem' }} >Welcome</Typography>
                            <Typography variant='body1' sx={{ "&:hover": { color: 'primary' } }} >{userInfo.first_name}</Typography>
                            
                        </Stack>
                    </> :
                    <>
                        <Avatar
                            sx={{ width: 36, height: 36 }}
                            alt='Avatar'
                        />
                        <Link href="/login">
                            <Typography sx={{ "&:hover": { color: 'primary' } }} >User Login</Typography>
                        </Link>
                    </>
            }
        </Stack>
    )
}

export default UserChip;