import React from 'react'
import TopSection from './micro/TopSection'
import TermsSection from './micro/TermsSection';
import { Container, Divider } from '@mui/material';
import { termsAndConditions, termsAndConditionsBangla } from '@/lib/t&c';


const TermsCondtionsPage = () => {
    return (
        <>
            <TopSection
                title="T & C"
                title_large="Terms And Conditions"
            />
            <Container
                sx={{py: 5}}
            >
                {
                    termsAndConditions.map((section, idx) => (
                        <TermsSection 
                            key={idx}
                            data={section}
                        />
                    ))
                }
                {/* <Divider 
                    sx={{
                        my: 3
                    }}
                />
                {
                    termsAndConditionsBangla.map((section, idx) => (
                        <TermsSection 
                            key={idx}
                            data={section}
                        />
                    ))
                } */}
            </Container>
        </>
    )
}

export default TermsCondtionsPage;