import React from 'react';
import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title } from './styles';
import logo from '../../assets/logo.svg';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from "react-icons/md";


const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logo} alt="Logo minha carteira" />
                <Title>Minha carteira</Title>
            </Header>

            <MenuContainer>

                <MenuItemLink href='/dashboard'>
                    <MdDashboard /> Dashboard
                </MenuItemLink>

                <MenuItemLink href='/list/entry-balance'>
                    <MdArrowUpward /> Entradas
                </MenuItemLink>

                <MenuItemLink href='/list/exit-balance'>
                    <MdArrowDownward /> Saídas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp /> Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;