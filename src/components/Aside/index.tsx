import React from 'react';
import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title, MenuItemButton } from './styles';
import logo from '../../assets/logo.svg';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';


const Aside: React.FC = () => {
    const { signOut } = useAuth();
    return (
        <Container>
            <Header>
                <LogoImg src={logo} alt="Logo minha carteira" />
                <Title>Minha carteira</Title>
            </Header>

            <MenuContainer>

                <Link to='/'>
                    <MenuItemLink>
                        <MdDashboard /> Dashboard
                </MenuItemLink>
                </Link>

                <Link to='/list/entry-balance'>
                    <MenuItemLink>
                        <MdArrowUpward /> Entradas
                </MenuItemLink>
                </Link>

                <Link to='/list/exit-balance'>
                    <MenuItemLink>
                        <MdArrowDownward /> Saídas
                </MenuItemLink>
                </Link>

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp /> Sair
                </MenuItemButton>

            </MenuContainer>
        </Container>
    );
}

export default Aside;