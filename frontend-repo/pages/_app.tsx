
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme/theme';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
};

export default MyApp;
