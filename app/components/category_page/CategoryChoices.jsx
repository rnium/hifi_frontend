import { useState, useEffect } from 'react';
import {
    Box, Chip, Stack, Typography, Slider,
    FormGroup, Checkbox, FormControlLabel, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation';
import TagGroup from './TagGroup';

const minPrice = 25000
const maxPrice = 352000


const CategoryChoices = ({ groups, slug, addId, sx }) => {
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    function pricetext(value) {
        return new Number(value).toLocaleString('en-IN');
    }
    return (
        <Box 
            sx={{...sx}}
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
                            value={priceRange}
                            onChange={e => setPriceRange(e.target.value)}
                            valueLabelDisplay="auto"
                            getAriaValueText={pricetext}
                            min={minPrice}
                            max={maxPrice}
                        />
                    </Box>
                    <Stack sx={{ mt: 2 }} direction="row" justifyContent="space-between">
                        <Chip sx={{ px: 0.5 }} variant='outlined' size='small' label={priceRange[0].toLocaleString('en-IN') + "৳"} />
                        <Chip sx={{ px: 0.5 }} size='small' label={priceRange[1].toLocaleString('en-IN') + "৳"} />
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
                        <FormControlLabel name='availibility' control={<Checkbox defaultChecked />} label="In Stock" />
                        <FormControlLabel name='availibility' control={<Checkbox />} label="Out of Stock" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            {
                groups.map((group, idx) => (
                    <TagGroup
                        key={idx}
                        title={group.title}
                        tags={group.categories}
                        addId={addId}
                    />
                ))
            }
        </Box>
    )
}

export default CategoryChoices