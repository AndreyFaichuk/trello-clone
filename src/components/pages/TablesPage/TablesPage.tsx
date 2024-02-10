import {
    Alert,
    Box,
    LinearProgress,
    Snackbar,
    Stack,
    TextField,
} from '@mui/material';
import { Table } from './components/Table';
import {
    TablePageProvider,
    useTablePageContext,
} from './TablesPageProvider/TablesPageProvider';
import { useFetchAllTicketsData } from './hooks';
import { TABLES } from './TablePage.constants';
import QueueIcon from '@mui/icons-material/Queue';
import {
    StyledTablesPageCreateButton,
    StyledTablesPageTuningBlockWrapper,
} from './TablesPage.styled';
import { useState } from 'react';
import { CreateTicketModalContainer } from './components/Ticket/components/CreateTicketModalContainer';

const Tables = () => {
    const { updateFilter, filter } = useTablePageContext();

    const [openCreateTicketModal, setIsCreateTicketModal] =
        useState<boolean>(false);

    const handleEditTicketModalOpen = () => setIsCreateTicketModal(true);
    const handleEditTicketModalClose = () => setIsCreateTicketModal(false);

    return (
        <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            flexDirection="row"
            gap={2}
        >
            <StyledTablesPageTuningBlockWrapper>
                <StyledTablesPageCreateButton
                    variant="contained"
                    fullWidth
                    startIcon={<QueueIcon />}
                    onClick={handleEditTicketModalOpen}
                >
                    Create ticket
                </StyledTablesPageCreateButton>
                <TextField
                    variant="filled"
                    color="secondary"
                    label="ticket search"
                    fullWidth
                    value={filter}
                    size="small"
                    onChange={(e) => updateFilter(e.target.value)}
                />
            </StyledTablesPageTuningBlockWrapper>
            {TABLES.map((config) => (
                <Table
                    key={config.category}
                    title={config.title}
                    category={config.category}
                />
            ))}
            {openCreateTicketModal && (
                <CreateTicketModalContainer
                    isOpen={openCreateTicketModal}
                    onClose={handleEditTicketModalClose}
                />
            )}
        </Stack>
    );
};

export const TablesPage = () => {
    const { allTickets, error, loading } = useFetchAllTicketsData();

    if (loading) {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        );
    }

    if (error || !allTickets) {
        return (
            <Snackbar open={true} autoHideDuration={6000}>
                <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
                    Something went wrong while fetching tickets!
                </Alert>
            </Snackbar>
        );
    }

    return (
        <TablePageProvider tickets={allTickets}>
            <Tables />
        </TablePageProvider>
    );
};
