import React from 'react';
import { Container } from './styles';
import ContentHeader from '../ContentHeader';

const Content: React.FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default Content;