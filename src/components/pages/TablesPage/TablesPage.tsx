import { Stack } from '@mui/material';
import { Table } from './components/Table';

export const TablesPage = () => {
    return (
        <Stack justifyContent="space-around" flexDirection="row">
            <Table />
            <Table />
            <Table />
            <Table />
        </Stack>
    );
};
