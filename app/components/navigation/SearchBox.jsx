'use client'
import { useState, useEffect } from "react";
import SearchModal from "./SearchModal";
import { IconButton, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = ({ mobile = false }) => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = e => {
        setSearchTerm(e.target.value);
    }

    const handleKeyUp = e => {
        if (e.key === 'Enter') {
            setOpen(true);
        }
    }

    const handleSearchBtnClick = () => {
        if (searchTerm.length) {
            setOpen(true);
        }
    }

    return (
        <>
            <SearchModal
                open={open}
                handleClose={() => setOpen(false)}
                searchTerm={searchTerm}
                handleChange={handleChange}
                setSearchTerm={setSearchTerm}
                mobile={mobile}
            />
            {
                mobile ?
                    <Stack
                        justifyContent='center'
                    >
                        <IconButton
                            size='small'
                            onClick={() => setOpen(true)}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Stack>
                    :
                    <div className='searchbox'>
                        <input
                            type="text"
                            placeholder='Search Product'
                            value={searchTerm}
                            onChange={handleChange}
                            onKeyUp={handleKeyUp}
                        />
                        <IconButton
                            size='small'
                            onClick={handleSearchBtnClick}
                        >
                            <SearchIcon />
                        </IconButton>
                    </div>
            }
        </>
    )
}

export default SearchBox