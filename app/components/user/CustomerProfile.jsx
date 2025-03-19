'use client'

import React, { useState, useEffect } from 'react';
import { Avatar, Card, CardContent, CardHeader, Typography, IconButton } from '@mui/material'
import { Mail as MailIcon, Phone as PhoneIcon, LocationOn as LocationOnIcon, Edit as EditIcon } from '@mui/icons-material'
import ProfileEditDialog from './ProfileEditDialog';
import { useUserState } from '@/hooks/useUser';
import NeedsAuthentication from '../utils/NeedsAuthentication';
import Spinner from '../utils/Spinner';
import MyOrders from './MyOrders';

const CustomerProfileWithOrders = () => {
  const { userInfo, userIsAuthenticated, userIsLoaded, setUserData } = useUserState();

  const [open, setOpen] = useState(false);

  if (!userIsLoaded) {
    return (
      <Spinner 
        description='Loading your profile...'
      />
    )
  }

  if (!userIsAuthenticated) {
    return (
      <NeedsAuthentication 
        description='Please login to view your profile'
        sx={{my: 10}}
        img_w={100}
      />
    )
  }
    

  return (
    <div className="py-4 space-y-8">
      <Card className="w-full" elevation={0}>
        <CardHeader
          title="My Profile"
          action={
            <IconButton onClick={() => setOpen(true)}>
              <EditIcon />
            </IconButton>
          }
        />
        <CardContent sx={{ pt: 0 }}>
          <Typography variant="body2" color="textSecondary" component="p">
            View your account details
          </Typography>
          <div className="flex flex-col md:flex-row gap-8 mt-7">
            <div className="flex flex-col items-center space-y-4">
              <Avatar src={userInfo?.avatar || '/images/avatar-3.svg'} alt={userInfo.name} style={{ width: 160, height: 160 }} />
              <Typography variant="h5">{userInfo.first_name}</Typography>
            </div>
            <div className="flex-grow space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <MailIcon />
                  <span>{userInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon />
                  <span>{userInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LocationOnIcon />
                  <span>{userInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <MyOrders />

      <ProfileEditDialog
        open={open}
        handleClose={() => setOpen(false)}
        profile={userInfo}
        setUserData={setUserData}
      />
    </div>
  )
}

export default CustomerProfileWithOrders

