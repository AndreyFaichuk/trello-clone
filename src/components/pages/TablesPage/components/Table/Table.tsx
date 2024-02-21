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
    TableCategory,
    TableConfig,
    Ticket as TicketProps,
} from '../../TablesPageProvider/types';
import dayjs from 'dayjs';
import { Ticket } from '../Ticket';
import { generatePath, useHistory } from 'react-router-dom';
import { AppRoute } from '../../../../../lib/routes';
import { EditTicketModalContainer } from '../Ticket/components/EditTicketModalContainer';

export const Table: FC<TableConfig> = (table) => {
    const { allTickets, onDragOver, onDrop } = useTablePageContext();

    const [currentTickets, setCurrentTickets] =
        useState<TicketProps[]>(allTickets);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [currentTicketId, setCurrentTicketId] = useState<string | null>(null);
    const [openEditTicketModal, setIsEditTicketModal] =
        useState<boolean>(false);

    const history = useHistory();

    const handleEditTicketModalOpen = () => setIsEditTicketModal(true);
    const handleEditTicketModalClose = () => setIsEditTicketModal(false);

    const handleTicketClick = (id: string, category: TableCategory) => {
        history.push(
            generatePath(AppRoute.EDIT_TICKET, {
                category,
                id,
            }),
        );
        setCurrentTicketId(id);
        handleEditTicketModalOpen();
    };

    const onEditTicketModalClose = () => {
        history.push(generatePath(AppRoute.TABLES));
        setCurrentTicketId(null);
        handleEditTicketModalClose();
    };

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
        const filteredTickets = allTickets.filter(
            (ticket) => ticket.category === table.category,
        );
        const sortedTickets = filteredTickets.sort(sortTickets);
        setCurrentTickets(sortedTickets);
    }, [allTickets, table.category, sortOrder, sortTickets]);

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
                {currentTickets.length > 1 && (
                    <Tooltip title="Sort by date of creation">
                        <IconButton
                            onClick={toggleSortOrder}
                            sx={{
                                width: '30px',
                                height: '30px',
                                transform:
                                    sortOrder === 'asc'
                                        ? 'rotate(180deg)'
                                        : 'unset',
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
                            priority={ticket.priority}
                            onClick={handleTicketClick}
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
            {openEditTicketModal && currentTicketId && (
                <EditTicketModalContainer
                    ticketId={currentTicketId}
                    isOpen={openEditTicketModal}
                    onClose={onEditTicketModalClose}
                />
            )}
        </StyledTableWrapper>
    );
};
