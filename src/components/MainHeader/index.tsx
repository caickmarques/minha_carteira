import React, { useMemo } from 'react';
import emojis from '../../utils/emojis';
import { Container, Profile, Welcome } from './styles';
import Toggle from '../Toggle';

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    return (
        <Container>
            <Toggle />

            <Profile>
                <Welcome>Olá, Caick {emoji}</Welcome>
            </Profile>
        </Container>
    );
}

export default MainHeader;