import { Paper, styled } from '@mui/material';

export const StyledTableWrapper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    width: '272px',
    maxHeight: '100%',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(1, 1, 2, 1),
}));

export const StyledTableTitle = styled('h2')(({ theme }) => ({
    fontSize: '14px',
    fontWeight: '600',
}));
