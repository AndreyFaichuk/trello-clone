import { Divider, Stack } from '@mui/material';
import { StyledTableTitle, StyledTableWrapper } from './Table.styled';
import { Ticket } from '../Ticket';
import { FC } from 'react';
import {
    TableConfig,
    useTablePageContext,
} from '../../TablesPageProvider/TablesPageProvider';

export const Table: FC<TableConfig> = (table) => {
    const { tickets, onDragOver, onDrop } = useTablePageContext();

    const renderTasks = (category: string) => {
        return tickets
            .filter((ticket) => ticket.category === category)
            .map((ticket) => (
                <Ticket
                    key={ticket.id}
                    name={ticket.name}
                    id={ticket.id}
                    category={ticket.category}
                />
            ));
    };

    return (
        <StyledTableWrapper
            elevation={2}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, table.category)}
        >
            <StyledTableTitle>{table.title}</StyledTableTitle>
            <Divider sx={{ marginBottom: 2 }} />
            <Stack gap={1.5}>{renderTasks(table.category)}</Stack>
        </StyledTableWrapper>
    );
};
