import {
    Skeleton, Stack, Typography
} from '@mui/material'

const Product = () => {
    return (
        <Stack
            spacing={1}
        >
            <Skeleton
                variant='rounded'
                height={350}
            />
            <Stack
            // alignItems='center'
            >
                <Typography variant='h6'>
                    <Skeleton />
                </Typography>
                <Typography variant='h6'>
                    <Skeleton width='70%' />
                </Typography>
            </Stack>

        </Stack>
    )
}

export default Product;