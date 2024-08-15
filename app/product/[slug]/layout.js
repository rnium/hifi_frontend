import NavBar from '@/app/components/navigation/NavBar'

import React from 'react'

const ProductLayout = ({ children }) => {
  return (
    <>
    <NavBar />
      <section>
        {children}
      </section>
    </>
  )
}

export default ProductLayout