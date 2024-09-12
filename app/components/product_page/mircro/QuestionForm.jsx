'use client';

import { useState, useEffect } from 'react';
import { message } from 'antd';
import { useUser } from '@/hooks/useUser';
import { Typography, Stack, Button, TextField } from '@mui/material';
import NeedsAuthentication from '../../utils/NeedsAuthentication';
import { usePost } from '@/hooks/useApi';


const QuestionForm = ({ insertQuestion, api }) => {
    const [description, setDescription] = useState("");
    const { userIsAuthenticated } = useUser();
    const {
        perform_post,
        data: new_q,
        success,
        error,
        loading,
        reset
    } = usePost(api, true);

    useEffect(() => {
        if (success && new_q) {
            message.success("Question Posted");
            insertQuestion(new_q);
            setDescription("")
            reset();
        }
        if (error) {
            message.error(error?.detail || "Cannot post question")
        }
    }, [success, new_q, error])

    const handleChange = e => {
        setDescription(e.target.value);
    }

    const handleSubmit = () => {
        perform_post({
            description
        })
    }

    return (
        <Stack alignItems="center" spacing={1}>
            {
                userIsAuthenticated ?
                    <>
                        <Typography color="secondary" variant='body1'>Ask A Question</Typography>
                        <TextField
                            fullWidth
                            label="Query details"
                            variant='filled'
                            color='secondary'
                            multiline
                            value={description}
                            onChange={handleChange}
                            rows={3}
                        />
                        <Button
                            onClick={handleSubmit}
                            variant='contained'
                            fullWidth
                            disabled={loading || description.length === 0}
                        >
                            Post Question
                        </Button>
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