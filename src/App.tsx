import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/GlobalStyles';
import Routes from '../src/routes';
import dark from './styles/themes/dark';


const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    )
}

export default App;