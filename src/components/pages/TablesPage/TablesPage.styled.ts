import { Box, Button, styled } from '@mui/material';

export const StyledTablesPageWrapper = styled(Box)(() => ({
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
}));

export const StyledTablesPageTuningBlockWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '10%',
    gap: theme.spacing(5),
    flexDirection: 'column',
}));

export const StyledTablesPageCreateButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.success.light,
    '&:hover': {
        backgroundColor: theme.palette.success.main,
    },
}));
