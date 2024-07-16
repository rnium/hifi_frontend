import React, { useState } from 'react';
import { Pagination, TablePagination, Stack } from '@mui/material';

const CategoryPagination = ({data, perform_get}) => {

    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Pagination
                count={data.total_pages}
                onChange={(e, value) => perform_get({page: value})}
                page={data.current_page}
                color="secondary"
            />
            {/* <TablePagination
                component="div"
                count={data.total_pages}
                page={data.current_page}
                onPageChange={handleChange}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
        </Stack>
    )
}

export default CategoryPagination