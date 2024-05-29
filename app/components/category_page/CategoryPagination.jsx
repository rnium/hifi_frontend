'use client';

import React, { useState } from 'react';
import { Pagination, TablePagination, Stack } from '@mui/material';

const CategoryPagination = () => {
    const [page, setPage] = useState(2);
    const [count, setCount] = useState(500);
    const [rowsPerPage, setRowsPerPage] = useState(25);

    const handleChange = (e, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Pagination
                count={count}
                onChange={(e, value) => setPage(value-1)}
                page={page + 1}
                color="primary"
                variant='outlined'
            />
            <TablePagination
                component="div"
                count={count}
                page={page}
                onPageChange={handleChange}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Stack>
    )
}

export default CategoryPagination