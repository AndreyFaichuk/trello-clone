import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { client } from '../../client';
import { theme } from '../../theme';
import { DefaultAppLayout } from '../app/DefaultAppLayout/DefaultAppLayout';
import { AppRoute } from '../../lib/routes';
import { TablesPage } from '../pages/TablesPage';
import { CssBaseline, GlobalStyles } from '@mui/material';

const App = () => {
    return (
        <DefaultAppLayout>
            <Switch>
                <Route exact path={AppRoute.TABLES}>
                    <TablesPage />
                </Route>
                <Redirect from="/" to={AppRoute.TABLES} />
            </Switch>
        </DefaultAppLayout>
    );
};

export const AppProvider = () => {
    return (
        <ApolloProvider client={client}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <Router>
                        <CssBaseline />
                        <GlobalStyles
                            styles={{
                                html: {
                                    height: '100%',
                                    boxSizing: 'border-box',
                                },
                            }}
                        />
                        <App />
                    </Router>
                </ThemeProvider>
            </StyledEngineProvider>
        </ApolloProvider>
    );
};
