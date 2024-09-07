'use client';

import { useUser } from '@/hooks/useUser';
import { Typography, Stack, Button, Rating, TextField } from '@mui/material';
import NeedsAuthentication from '../../utils/NeedsAuthentication';

const QuestionForm = () => {
    const { userIsAuthenticated } = useUser();
    return (
        <Stack alignItems="center" spacing={1}>
            <Typography color="secondary" variant='body1'>Ask A Question</Typography>
            {
                userIsAuthenticated ?
                    <>
                        <TextField
                            fullWidth
                            label="Query details"
                            variant='filled'
                            color='secondary'
                            multiline
                            rows={3}
                        />
                        <Button variant='contained' fullWidth>Post Question</Button>
                    </>
                    :
                    <NeedsAuthentication 
                        description='You need to login to ask questions'
                    />
            }

        </Stack>
    )
}

export default QuestionForm;