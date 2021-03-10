import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/GlobalStyles';
import { useTheme } from '../src/hooks/theme';
import Routes from '../src/routes';

const App: React.FC = () => {
    const { theme } = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    )
}

export default App;