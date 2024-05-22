export const metadata = {
    title: "Product Title",
    description: "Product description"
}

import React from 'react'

const ProductLayout = ({children}) => {
  return (
    <section>
        {children}
    </section>
  )
}

export default ProductLayout