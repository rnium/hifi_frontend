import { Stack, Skeleton, Typography } from '@mui/material'
import React from 'react'

const SearchResult = () => {
    return (
        <Stack
            spacing={2}
        >
            {
                Array.from({ length: 4 }, (_, i) => i).map(i => (
                    <Stack
                        key={i}
                        direction='row'
                        spacing={1}
                    >
                        <Skeleton
                            width={50}
                            height={50}
                            variant='rounded'
                        />
                        <Stack >
                            <Skeleton 
                                width={350}
                                height={25}
                            />
                            <Skeleton 
                                width={250}
                                height={25}
                            />
                        </Stack>
                    </Stack>
                ))
            }
        </Stack>
    )
}

export default SearchResult