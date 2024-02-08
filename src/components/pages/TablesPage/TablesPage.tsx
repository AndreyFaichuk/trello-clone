import { Stack } from '@mui/material';
import { Table } from './components/Table';
import {
    TablePageProvider,
    useTablePageContext,
} from './TablesPageProvider/TablesPageProvider';
import { useFetchAllTicketsData } from './hooks';
import { useQuery } from '@apollo/client';
import { ALL_TICKETS_QUERY } from './queries';

const Tables = () => {
    const { tables } = useTablePageContext();

    return (
        <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            flexDirection="row"
            gap={2}
        >
            {tables.map((config) => (
                <Table
                    key={config.category}
                    title={config.title}
                    category={config.category}
                />
            ))}
        </Stack>
    );
};

export const TablesPage = () => {
    const { allTickets, error, loading } = useFetchAllTicketsData();

    // const { data } = useQuery(ALL_TICKETS_QUERY);

    console.log(allTickets, 'tikets');

    return (
        <TablePageProvider>
            <Tables />
        </TablePageProvider>
    );
};
