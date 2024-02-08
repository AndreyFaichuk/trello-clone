import { Divider, IconButton, Stack, SvgIcon, Tooltip } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import {
    StyledTableTitle,
    StyledTableWarningSection,
    StyledTableWarningSectionText,
    StyledTableWrapper,
} from './Table.styled';
import InfoIcon from '@mui/icons-material/Info';
import { FC, useCallback, useLayoutEffect, useState } from 'react';
import { useTablePageContext } from '../../TablesPageProvider/TablesPageProvider';
import {
    TableConfig,
    Ticket as TicketProps,
} from '../../TablesPageProvider/types';
import dayjs from 'dayjs';
import { Ticket } from '../Ticket';

export const Table: FC<TableConfig> = (table) => {
    const { tickets, onDragOver, onDrop } = useTablePageContext();
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const [currentTickets, setCurrentTickets] =
        useState<TicketProps[]>(tickets);

    const toggleSortOrder = () => {
        setSortOrder((prevSortOrder) =>
            prevSortOrder === 'asc' ? 'desc' : 'asc',
        );
    };

    const sortTickets = useCallback(
        (a: TicketProps, b: TicketProps) => {
            const multiplier = sortOrder === 'asc' ? 1 : -1;
            const dateA = dayjs(a.dateCreated);
            const dateB = dayjs(b.dateCreated);
            return multiplier * (dateB.diff(dateA) as number);
        },
        [sortOrder],
    );

    useLayoutEffect(() => {
        const filteredTickets = tickets.filter(
            (ticket) => ticket.category === table.category,
        );
        const sortedTickets = filteredTickets.sort(sortTickets);
        setCurrentTickets(sortedTickets);
    }, [tickets, table.category, sortOrder, sortTickets]);

    return (
        <StyledTableWrapper
            elevation={2}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, table.category)}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <StyledTableTitle>{table.title}</StyledTableTitle>
                {currentTickets.length > 0 && (
                    <Tooltip title="Sort by date of creation">
                        <IconButton
                            onClick={toggleSortOrder}
                            sx={{
                                width: '30px',
                                height: '30px',
                            }}
                        >
                            <SortIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </Stack>
            <Divider sx={{ marginBottom: 2 }} />
            <Stack gap={1.5}>
                {currentTickets.length > 0 ? (
                    currentTickets.map((ticket) => (
                        <Ticket
                            key={ticket.id}
                            name={ticket.name}
                            id={ticket.id}
                            category={ticket.category}
                            dateCreated={ticket.dateCreated}
                        />
                    ))
                ) : (
                    <StyledTableWarningSection>
                        <SvgIcon>
                            <InfoIcon />
                        </SvgIcon>
                        <StyledTableWarningSectionText>
                            There are no tickets yet
                        </StyledTableWarningSectionText>
                    </StyledTableWarningSection>
                )}
            </Stack>
        </StyledTableWrapper>
    );
};
