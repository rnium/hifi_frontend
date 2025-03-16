import React from 'react'
import TopSection from './micro/TopSection'
import TermsSection from './micro/TermsSection'
import { Container } from '@mui/material'
import { returnAndRefundPolicy } from '@/lib/return_and_refund'

const ReturnRefundPage = () => {
  return (
    <>
      <TopSection
        title="Return & Refund"
        title_large="Return and Refund Policy"
      />
      <Container sx={{ py: 5 }}>
        {
          returnAndRefundPolicy.map((section, idx) => (
            <TermsSection
              key={idx}
              data={section}
            />
          ))
        }
      </Container>
    </>
  )
}

export default ReturnRefundPage