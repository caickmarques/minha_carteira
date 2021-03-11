import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    min-height: 260px;
    margin: 10px 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    display: flex;

    @media(max-width: 1200px){
       flex-direction: column;
       width: 100%;
       height: auto;
    }
`;

export const SideLeft = styled.aside`
    flex: 1;
    padding: 30px 20px;

    >h2{
        padding-left: 16px;
        margin-bottom: 10px;
    }

`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    padding-left: 16px;

    >div{
        font-size: 18px;
        font-weight: 700;
        background-color: ${props => props.color};
        width: 60px;
        height: 40px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    >span{
        margin-left: 5px;    
    }

    @media(max-width: 1200px){
        margin-bottom: 0px;
       >div{
        width: 45px;
        font-size: 13px;
       justify-content: center;
       align-items: center;
       }
       
    }

`;

export const LegendContainer = styled.ul`
    max-height: 175px;
    padding-right: 15px;
    overflow-y: scroll;
    ::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
}
::-webkit-scrollbar-track{
    background-color: ${props => props.theme.colors.tertiary};
}
@media(max-width: 1200px){
       display: flex;
       height: auto;
    }

`;

export const SideRight = styled.main`
    flex: 1;
    min-height: 150px;
    display: flex;
    justify-content: center;
    padding-top: 35px;
`;