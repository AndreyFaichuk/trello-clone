import { Stack } from '@mui/material';
import { StyledTableTitle, StyledTableWrapper } from './Table.styled';
import { Ticket } from '../Ticket';

export const Table = () => {
    return (
        <StyledTableWrapper elevation={2}>
            <StyledTableTitle>backlog</StyledTableTitle>
            <Stack gap={1.5}>
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
            </Stack>
        </StyledTableWrapper>
    );
};
