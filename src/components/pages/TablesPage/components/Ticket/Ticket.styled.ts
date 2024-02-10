import { Paper, Typography, styled } from '@mui/material';
import { Box } from '@mui/system';

export const StyledTicketWrapper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    minHeight: '60px',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1.25),
    cursor: 'move',
    '&:hover': {
        backgroundColor: theme.palette.primary.contrastText,
    },
}));

export const StyledTicketTitle = styled(Typography)(() => ({
    fontSize: '13px',
    lineHeight: '1.6',
}));

export const StyledTicketNameWrapper = styled(Box)(() => ({
    display: 'flex',
    maxWidth: '80%',
}));

export const StyledTicketTooltipWrapper = styled(Paper)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '27px',
    height: '27px',
}));

export const StyledTicketDaysCounterText = styled('span')(() => ({
    fontSize: '10px',
    color: 'white',
}));
