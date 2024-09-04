import { Stack, Typography } from '@mui/material';

const TermsSection = ({ data }) => {
    return (
        <Stack
            sx={{ mb: 3 }}
        >
            <Typography
                variant='h6'
                color="text.secondary"
                fontSize={{
                    xs: '1rem',
                    md: '1.5rem'
                }}
            >
                {data.title}
            </Typography>
            {
                typeof (data.terms) === 'string' ?
                    <Typography
                        fontSize={{
                            xs: '0.8rem',
                            md: '1.3rem'
                        }}
                    >
                        {data.terms}
                    </Typography>
                    :
                    <ul className='list-disc ml-4' >
                        {
                            data.terms.map((t, idx) => (
                                <li
                                    key={idx}
                                >
                                    <Typography
                                        variant='body1'
                                        fontSize={{
                                            xs: '0.8rem',
                                            md: '1.3rem'
                                        }}
                                    >
                                        {t}
                                    </Typography>
                                </li>
                            ))
                        }
                    </ul>
            }
        </Stack>
    )
}

export default TermsSection