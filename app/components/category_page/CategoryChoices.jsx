import { useState, useEffect } from 'react';
import {
    Box, Chip, Stack, Typography, Slider,
    FormGroup, Checkbox, FormControlLabel, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation';
import TagGroup from './TagGroup';


const CategoryChoices = ({ groups, priceRange, setPriceRange, toggleAvalibility, minPrice, maxPrice, ToggleTags, sx }) => {
    const [priceRangeLocal, setPriceRangeLocal] = useState([...priceRange]);

    function pricetext(value) {
        return new Number(value).toLocaleString('en-IN');
    }

    return (
        <Box
            sx={{ ...sx }}
        >
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
                                    onClick={() => toggleAvalibility(1)}
                                />
                            }
                            label="In Stock"
                        />
                        <FormControlLabel
                            name='availibility'
                            control={
                                <Checkbox
                                    onClick={() => toggleAvalibility(0)}
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