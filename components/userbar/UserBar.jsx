import React from 'react';
import { Box, Toolbar, Button, Container, AppBar, Stack } from '@mui/material';
import '@/components/userbar/style.css';

const UserBar = () => {
    return (
        <div className='user-bar'>
            <AppBar position="static" color='transparent' elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Stack sx={{width: '100%'}} direction="row" justifyContent="space-between">
                            <Box >
                                <div className='searchbox'>
                                    <input
                                        type="text"
                                        placeholder='Search Product'
                                    // value={registration}
                                    // onKeyDown={handleKeyDown}
                                    // onChange={event => setRegistration(event.target.value)}
                                    />
                                    <img src="/search.svg" alt="search_icon" className='icon' />
                                    <Button
                                        // disabled={isSearching}
                                        // onClick={getInfo}
                                        variant="contained"
                                    >
                                        Search
                                    </Button>
                                </div>
                            </Box>
                            <Stack direction="row" spacing={1}>
                                <Button variant='outlined' sx={{ backgroundColor: 'inherit', color: 'white', borderColor: 'white' }}>SignUp</Button>
                                <Button variant='outlined' sx={{ backgroundColor: 'inherit', color: 'white', borderColor: 'white' }}>Login</Button>
                            </Stack>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    )
}

export default UserBar