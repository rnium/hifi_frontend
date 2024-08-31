'use client'
import { useState, useEffect } from "react";
import SearchModal from "./SearchModal";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
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

    return (
        <div className='searchbox'>
            <SearchModal
                open={open}
                handleClose={() => setOpen(false)}
                searchTerm={searchTerm}
                handleChange={handleChange}
            />
            <input
                type="text"
                placeholder='Search Product'
                value={searchTerm}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
            />
            <IconButton
                size='small'
                onClick={() => setOpen(true)}
            >
                <SearchIcon />
            </IconButton>
        </div>
    )
}

export default SearchBox