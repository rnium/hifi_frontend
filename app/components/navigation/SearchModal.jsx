import { useState, useEffect } from "react";
import { Empty } from "antd";
import { Modal, Box, Stack, Divider, TextField, Typography } from "@mui/material";
import SearchResult from "../skeletons/SearchResult";
import SearchedProduct from "../utils/SearchedProduct";
import { useGet } from "@/hooks/useApi";
import { api_endpoints, api_host } from "@/lib/data";

const style = {
    position: 'absolute',
    top: {xs: '40%', md: '35%'},
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    maxWidth: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: {xs: 2, md: 4},
    outline: 'none'
};

const SearchModal = ({ searchTerm, open, setSearchTerm, handleClose, mobile }) => {
    const [localSerchTerm, setLocalSerchTerm] = useState('');
    const { data: products, perform_get, success, error, loaded, loading } = useGet(`${api_host}${api_endpoints.search_product}`, false, []);

    useEffect(() => {
        if (!open) return;
        const timeoutId = setTimeout(() => {
            if (localSerchTerm.length) {
                perform_get({ query: localSerchTerm });
            }

        }, 1000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [open, localSerchTerm, handleClose])

    useEffect(() => {
        if (open) {
            if (searchTerm.length) {
                setLocalSerchTerm(searchTerm);
            }
            setSearchTerm('');
        }
    }, [open, setSearchTerm, searchTerm, setLocalSerchTerm])

    const handleChange = e => {
        const val = e.target.value;
        if (val.length === 0 && !mobile) handleClose();
        setLocalSerchTerm(val);
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableAutoFocus
        >
            <Box sx={{...style, position: {xs: 'relative', md: 'absolute'}}}>
                <TextField
                    inputRef={input => input && input.focus()}
                    label="Search Product"
                    variant="filled"
                    fullWidth
                    name='searchterm'
                    value={localSerchTerm}
                    onChange={handleChange}
                    handleClose={handleClose}
                    sx={{
                        mb: 2
                    }}
                />
                {
                    localSerchTerm.length === 0 && mobile && (
                        <Empty
                            description={
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Start typing to search
                                </Typography>
                            }
                        />
                    )
                }
                {
                    localSerchTerm.length > 0 && (loading || !loaded) && <SearchResult count={5} />
                }
                {
                    localSerchTerm.length > 0 && !loading && loaded && (
                        <Stack
                            spacing={0.5}
                        >
                            {
                                products.slice(0, 5).map((prod, idx) => (
                                    <>
                                        <SearchedProduct
                                            key={idx}
                                            product={prod}
                                        />
                                        {
                                            (idx < 4) && <Divider variant="inset" />
                                        }
                                    </>
                                ))
                            }
                        </Stack>
                    )
                }
                {
                    (loaded && products.length == 0 && !loading) && (
                        <Stack
                            sx={{
                                py: 5
                            }}
                        >
                            <Empty
                                description={
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                    >
                                        No Products Found
                                    </Typography>
                                }
                            />
                        </Stack>
                    )
                }
            </Box>
        </Modal>
    )
}

export default SearchModal;