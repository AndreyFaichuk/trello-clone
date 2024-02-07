import { createTheme, darken, lighten } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            dark: darken('#cfcfcf', 0.1),
            main: '#cfcfcf',
            light: lighten('#cfcfcf', 0.4),
            contrastText: lighten('#cfcfcf', 0.6),
        },
    },
});
