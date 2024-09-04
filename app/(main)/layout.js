import NavBar from '@/app/components/navigation/NavBar'
export const metadata = {
    title: "HiFi Computer",
}

import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

export default Layout;