import { Divider, Stack } from '@mui/material';
import { Table } from './components/Table';
import { useState } from 'react';
import {
    StyledTableTitle,
    StyledTableWrapper,
} from './components/Table/Table.styled';
import {
    StyledTicketTitle,
    StyledTicketWrapper,
} from './components/Ticket/Ticket.styled';
import { Ticket } from './components/Ticket';
import { TablePageContext } from './TablesPageProvider';
import { useTablePageContext } from './TablesPageProvider/TablesPageProvider';

export const TablesPage = () => {
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
