import { useState, useEffect } from 'react';
import {
    Box, Chip, Stack, Typography, Slider,
    FormGroup, Checkbox, FormControlLabel, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation';
import TagGroup from './TagGroup';
import PriceRange from './PriceRange';


const CategoryChoices = ({ groups, priceRange, setPriceRange, toggleAvalibility, minPrice, maxPrice, ToggleTags, sx }) => {
    console.log('rerendering');

    return (
        <Box
            sx={{ ...sx }}
        >
            <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} minPrice={minPrice} maxPrice={maxPrice} />
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
                        Availability
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup sx={{ px: 1 }}>
                        <FormControlLabel
                            name='availibility'
                            control={
                                <Checkbox
                                    onClick={() => setTimeout(() => toggleAvalibility(1), 1)}
                                />
                            }
                            label="In Stock"
                        />
                        <FormControlLabel
                            name='availibility'
                            control={
                                <Checkbox
                                    onClick={() => setTimeout(() => toggleAvalibility(0), 1)}
                                />
                            }
                            label="Out of Stock"
                        />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            {
                groups.map((group, idx) => (
                    <TagGroup
                        key={idx}
                        title={group.title}
                        tags={group.categories}
                        ToggleTags={ToggleTags}
                    />
                ))
            }
        </Box>
    )
}

export default CategoryChoices