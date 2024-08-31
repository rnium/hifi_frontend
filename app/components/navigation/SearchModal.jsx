import { useEffect } from "react";
import { Modal, Box, Stack, Divider, TextField } from "@mui/material";
import SearchResult from "../skeletons/SearchResult";
import SearchedProduct from "../utils/SearchedProduct";
import { useGet } from "@/hooks/useApi";
import { api_endpoints, api_host } from "@/lib/data";

const style = {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
    outline: 'none'
};

const SearchModal = ({ searchTerm, open, handleChange, handleClose }) => {
    const { data: products, perform_get, success, error, loaded, loading } = useGet(`${api_host}${api_endpoints.search_product}`, false, []);

    useEffect(() => {
        if (!open) return;
        const timeoutId = setTimeout(() => {
            perform_get({ query: searchTerm });

        }, 1000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [open, searchTerm])

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableAutoFocus
        >
            <Box sx={style}>
                <TextField
                    label="Search Product"
                    variant="filled"
                    fullWidth
                    disabled={!loaded || loading}
                    name='searchterm'
                    value={searchTerm}
                    onChange={handleChange}
                    handleClose={handleClose}
                    sx={{
                        mb: 2
                    }}
                />
                {
                    (loading || !loaded) ?
                        <SearchResult />
                        :
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
                                            (idx < 4) && <Divider variant="inset"/>
                                        }
                                    </>
                                ))
                            }
                        </Stack>
                }
            </Box>
        </Modal>
    )
}

export default SearchModal;