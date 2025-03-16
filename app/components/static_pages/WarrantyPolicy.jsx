import React from 'react'
import TopSection from './micro/TopSection'
import TermsSection from './micro/TermsSection'
import { Container } from '@mui/material'
import { warrantyPolicy } from '@/lib/warrenty_policy'

const WarrentyPolicy = () => {
  return (
    <>
      <TopSection
        title="Warranty Policy"
        title_large="Warranty Policy"
      />
      <Container sx={{ py: 5 }}>
        {
          warrantyPolicy.map((section, idx) => (
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

export default WarrentyPolicy