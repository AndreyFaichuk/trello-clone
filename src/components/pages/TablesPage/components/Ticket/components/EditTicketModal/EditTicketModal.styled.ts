import { styled } from '@mui/material';
import { Box } from '@mui/system';

export const StyledEditTicketModalWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    minWidth: '350px',
    maxWidth: '450px',
    minHeight: '315px',
}));

export const StyledEditTicketModalTitle = styled('h3')(() => ({
    fontSize: '16px',
    margin: 'unset',
}));

export const StyledEditTicketInfoWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    marginTop: theme.spacing(4),
}));

export const StyledEditTicketModalColumnText = styled('span')(() => ({
    fontSize: '15px',
    margin: 'unset',
}));

export const StyledEditTicketCommentsWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
}));
