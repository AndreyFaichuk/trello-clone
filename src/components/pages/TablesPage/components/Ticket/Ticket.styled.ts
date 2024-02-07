import { Paper, styled } from '@mui/material';

export const StyledTicketWrapper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    minHeight: '60px',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1),
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.primary.contrastText,
    },
}));

export const StyledTicketTitle = styled('h3')(() => ({
    fontSize: '12px',
}));
