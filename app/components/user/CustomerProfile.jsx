'use client'

import React, { useState, useEffect } from 'react';
import { Avatar, Card, CardContent, CardHeader, Typography, Table, TableBody, TableCell, TableHead, TableRow, Badge, IconButton } from '@mui/material'
import { Mail as MailIcon, Phone as PhoneIcon, LocationOn as LocationOnIcon, Edit as EditIcon } from '@mui/icons-material'
import ProfileEditDialog from './ProfileEditDialog';
import { useUserState } from '@/hooks/useUser';
import NeedsAuthentication from '../utils/NeedsAuthentication';
import Spinner from '../utils/Spinner';

const CustomerProfileWithOrders = () => {
  const { userInfo, userIsAuthenticated, userIsLoaded, setUserData } = useUserState();

  const [open, setOpen] = useState(false)

  const [orders, setOrders] = useState([
    { id: '1001', date: '2023-06-01', total: 125.99, status: 'delivered', image: '/placeholder.svg?height=80&width=80' },
    { id: '1002', date: '2023-06-15', total: 79.99, status: 'shipped', image: '/placeholder.svg?height=80&width=80' },
    { id: '1003', date: '2023-06-28', total: 249.99, status: 'processing', image: '/placeholder.svg?height=80&width=80' },
    { id: '1004', date: '2023-07-05', total: 99.99, status: 'processing', image: '/placeholder.svg?height=80&width=80' },
    { id: '1005', date: '2023-07-12', total: 189.99, status: 'shipped', image: '/placeholder.svg?height=80&width=80' },
  ])

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
      />
    )
  }
    

  return (
    <div className="container mx-auto p-4 space-y-8">
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

      <Card className="w-full">
        <CardHeader title="Order History" />
        <CardContent>
          <div style={{ maxHeight: 400, overflow: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <Avatar src={order.image} alt={`Order ${order.id}`} />
                    </TableCell>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>${order.total.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        color={
                          order.status === 'delivered' ? 'primary' :
                            order.status === 'shipped' ? 'secondary' : 'default'
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

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

