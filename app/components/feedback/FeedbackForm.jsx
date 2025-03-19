'use client'

import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import { useUserState } from '@/hooks/useUser';
import { Box, TextField, Button, Container, Typography, FormControlLabel, Checkbox } from '@mui/material';
import { usePost } from '@/hooks/useApi';
import { api_endpoints } from '@/lib/data';
import NeedsAuthentication from '../utils/NeedsAuthentication';
import { RiSendPlaneFill } from '@remixicon/react';
import FeedbackSuccess from './FeedbackSuccess';


const FeedbackForm = () => {
  const { perform_post, success, loading, error, reset } = usePost(process.env.NEXT_PUBLIC_API_HOST + api_endpoints.submit_feedback, true);
  const { userIsAuthenticated } = useUserState();
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (!subject || !description) {
      message.error('Please fill in all fields');
      return;
    }
    perform_post({ subject, description });
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      
      message.error("An error occurred while submitting feedback. Please try again later.");
      reset();
    }
  }, [error]);

  if (!userIsAuthenticated) {
    return (
      <NeedsAuthentication
        sx={{ my: 10 }}
        img_w={100}
        description='You need to login to submit feedback.'
      />
    )
  }

  if (success) {
    return <FeedbackSuccess />;
  }

  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Submit A Feedback
      </Typography>
      <Box component="form" sx={{ mt: 3 }}>
        <TextField
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              name="agree"
              color="primary"
            />
          }
          label="By submitting this feedback, I agree to the terms and conditions."
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            startIcon={<RiSendPlaneFill />}
            disabled={!agree || loading}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default FeedbackForm;