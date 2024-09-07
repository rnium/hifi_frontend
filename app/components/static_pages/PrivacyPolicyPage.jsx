import React from 'react'
import TopSection from './micro/TopSection'
import TermsSection from './micro/TermsSection';
import { Container } from '@mui/material';
import { privacy_policy_data } from '@/lib/policy_data';


const PrivacyPolicyPage = () => {
    return (
        <>
            <TopSection
                title="Privacy Policy"
                title_large="Privacy Policy at HiFi Computer"
            />
            <Container
                sx={{py: 5}}
            >
                {
                    privacy_policy_data.map((section, idx) => (
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

export default PrivacyPolicyPage;