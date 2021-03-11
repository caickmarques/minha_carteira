import styled, { keyframes } from 'styled-components';

interface ILegendProps {
    color: string;
};

const animate = keyframes`
    0%{
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }

    100%{
        transform: translateX(0px);
        opacity: 1
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 360px;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    margin: 10px 0;
    padding: 30px 20px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: ${animate} .5s ease-in;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    >h2 {
        margin-bottom: 20px;
        margin-left: 19px;
    }

    @media(max-width: 1200px){
        flex-direction: column;
    }
`;
export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    margin-left: 19px;

    >div{
        background-color: ${props => props.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
    }

    >span{
        margin-left: 5px;
    }

    @media(max-width: 1200px){
       > div {
        width: 30px;
        height: 30px;
        margin-bottom: 7px;
       }
    }

`;
