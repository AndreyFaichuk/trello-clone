import { Paper, styled } from '@mui/material';
import { Box } from '@mui/system';

export const StyledTableWrapper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    width: '272px',
    maxHeight: '100%',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(1, 1, 2, 1),
}));

export const StyledTableTitle = styled('h2')(() => ({
    fontSize: '14px',
    fontWeight: '600',
}));

export const StyledTableWarningSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

export const StyledTableWarningSectionText = styled('span')(() => ({
    fontSize: '14px',
}));
