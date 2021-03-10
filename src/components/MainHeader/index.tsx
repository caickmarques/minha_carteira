import React, { useMemo, useState } from 'react';
import emojis from '../../utils/emojis';
import { Container, Profile, Welcome } from './styles';
import Toggle from '../Toggle';
import { useTheme } from '../../hooks/theme';

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();
    const [darkTheme, setdarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setdarkTheme(!darkTheme);
        toggleTheme();
    }

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    return (
        <Container>
            <Toggle
                labelLeft='Dark'
                labelRight='Light'
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá, Caick {emoji}</Welcome>
            </Profile>
        </Container>
    );
}

export default MainHeader;