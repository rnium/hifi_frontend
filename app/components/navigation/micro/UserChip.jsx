'use client'

import { useEffect, useState } from 'react';
import { Avatar, Typography, Stack, Skeleton, Popover, MenuItem, IconButton, Divider } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@/hooks/useUser';
import { useLogout } from '@/hooks/useAuth';
import { message } from 'antd';


const UserChip = () => {
    const { userInfo, userIsAuthenticated, userIsLoaded, loadingUser, reset } = useUser();
    const [open, setOpen] = useState(null);
    const { logout, success } = useLogout();
    const pathname = usePathname();


    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleLogout = () => {
        logout();
        handleClose();
    }

    useEffect(() => {
        if (success) {
            message.info('Logged Out Successfully');
        }
    }, [success])

    if (!userIsLoaded) {
        return (
            <Stack direction="row" alignItems="center" spacing={1}>
                <Skeleton sx={{ bgcolor: 'gray' }} width="40px" height="40px" variant='circular' />
                <Stack spacing={0.5}>
                    <Skeleton sx={{ bgcolor: 'gray' }} width="70px" height="10px" variant='rounded' />
                    <Skeleton sx={{ bgcolor: 'gray' }} width="100px" height="20px" variant='rounded' />
                </Stack>
            </Stack>
        )
    }
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            {
                userIsAuthenticated ?
                    <>
                        <IconButton
                            onClick={handleOpen}
                        >
                            <Avatar
                                sx={{ width: 40, height: 40 }}
                                alt='Avatar'
                                src={userInfo?.avatar || '/images/avatar-3.svg'}
                            />
                        </IconButton>
                        <Stack justifyItems="center">
                            <Typography variant='caption' color="white" sx={{ "&:hover": { color: 'primary' }, fontSize: '0.7rem' }} >Welcome</Typography>
                            <Typography variant='body1' color="white" sx={{ "&:hover": { color: 'primary' } }} >{userInfo.first_name}</Typography>

                        </Stack>
                    </> :
                    <>
                        <Avatar
                            sx={{ width: 40, height: 40 }}
                            alt='Avatar'
                        />
                        <Link href={pathname !== '/login' ? `/login?next=${pathname}` : `/login`}>
                            <Typography color="white" sx={{ "&:hover": { color: 'primary' } }} >User Login</Typography>
                        </Link>
                    </>
            }
            <Popover
                open={!!open}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Link href="/user/account">
                    <MenuItem
                        disableRipple
                        disableTouchRipple
                        sx={{ typography: 'body2', py: 1.5 }}
                        onClick={handleClose}
                    >
                        My Account
                    </MenuItem>
                </Link>
                <Divider sx={{ borderStyle: 'dashed', m: 0 }} />
                <MenuItem
                    disableRipple
                    disableTouchRipple
                    onClick={handleLogout}
                    sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
                >
                    Logout
                </MenuItem>
            </Popover>
        </Stack>
    )
}

export default UserChip;