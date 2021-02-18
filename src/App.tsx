import React from 'react';
import GlobalStyles from '../src/styles/GlobalStyles';
import Layout from './components/Layout';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <Layout />
        </>
    )
}

export default App;