import { DialogContent, IconButton, styled } from '@mui/material';

export const StyledModalWindowWrapper = styled(DialogContent)(({ theme }) => ({
    padding: theme.spacing(1, 3),
    minHeight: '175px',
    display: 'flex',
    alignItems: 'flex-start',
}));

export const StyledModalWindowIconButton = styled(IconButton)(() => ({
    position: 'absolute',
    right: 8,
    top: 8,
}));
