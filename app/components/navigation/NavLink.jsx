import React from 'react'
import Link from 'next/link'
import { Stack, Typography } from '@mui/material'

const NavLink = ({ icon, title, url }) => {
    return (
        <Link href={url}>
            <Stack direction='row' alignItems='center' spacing={0} sx={{ cursor: 'pointer' }} className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                {icon}
                <Typography className='ml-[4px]' variant='caption'>{title}</Typography>
            </Stack>
        </Link>
    )
}

export default NavLink