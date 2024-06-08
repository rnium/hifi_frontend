import NavBar from '@/app/components/navigation/NavBar'
export const metadata = {
  title: "Category Title",
  description: "Category description"
}

import React from 'react'

const CategoryLayout = ({ children }) => {
  return (
    <>
    <NavBar />
      <section>
        {children}
      </section>
    </>
  )
}

export default CategoryLayout;