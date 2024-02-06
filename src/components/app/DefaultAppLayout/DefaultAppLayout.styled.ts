import { styled } from '@mui/material';

export const StyledDefaultAppLayoutContent = styled('main')(() => ({
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
}));

export const StyledDefaultAppLayoutPageContent = styled('section')(
    ({ theme }) => ({
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        overflow: 'auto',
        padding: theme.spacing(3),
    }),
);