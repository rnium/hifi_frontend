import {
    TableContainer, Table, TableBody, TableRow, TableCell,
    Alert
} from '@mui/material';
import { styled } from '@mui/material';


const DataCell = styled(TableCell)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    'td': {
        border: 0,
    },
}));


const ProductSpecTables = ({ tables }) => {
    return (
        <TableContainer sx={{ mb: 2 }}>
            <Table>
                <TableBody>

                    {
                        tables.map((table, idx) => (
                            <>
                                <StyledTableRow >
                                    <TableCell sx={{ px: 0, pb: 0 }} colSpan={2}>
                                        <Alert sx={{ mx: 0 }} icon={false} severity='error'>
                                            {table.title}
                                        </Alert>
                                    </TableCell>
                                </StyledTableRow>
                                {
                                    table.specs.map((spec, i) => (
                                        <TableRow >
                                            <DataCell>{spec.title}</DataCell>
                                            <DataCell>{spec.value}</DataCell>
                                        </TableRow>
                                    ))
                                }
                            </>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductSpecTables;