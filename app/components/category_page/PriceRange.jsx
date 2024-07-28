import React from 'react';
import { useState, useEffect } from 'react';
import {
    Box, Chip, Stack, Typography, Slider,
    FormGroup, Checkbox, FormControlLabel, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PriceRange = ({priceRange, setPriceRange, minPrice, maxPrice}) => {
    const [priceRangeLocal, setPriceRangeLocal] = useState([...priceRange]);
    function pricetext(value) {
        return new Number(value).toLocaleString('en-IN');
    }
    return (
        <Accordion
            defaultExpanded={true}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography
                    variant='h6'
                    color="text.primary"
                    fontSize="1.1rem"
                >
                    Price Range
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ px: 2 }}>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={priceRangeLocal}
                        onChange={e => setPriceRangeLocal(e.target.value)}
                        onChangeCommitted={() => setPriceRange([...priceRangeLocal])}
                        valueLabelDisplay="auto"
                        getAriaValueText={pricetext}
                        min={minPrice}
                        max={maxPrice}
                    />
                </Box>
                <Stack sx={{ mt: 2 }} direction="row" justifyContent="space-between">
                    <Chip sx={{ px: 0.5 }} variant='outlined' size='small' label={`${priceRangeLocal[0].toLocaleString('en-IN')}৳`} />
                    <Chip sx={{ px: 0.5 }} size='small' label={`${priceRangeLocal[1].toLocaleString('en-IN')}৳`} />
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}

export default PriceRange