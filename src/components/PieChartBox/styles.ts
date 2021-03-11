import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 260px;
    margin: 10px 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    display: flex;

    @media(max-width: 770px){
        display: flex;
        width: 100%;
    }

    @media(max-width: 420px){
        height: 200px;
    }
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h1{
        margin-bottom: 20px;
        font-size: 2em;
    }

    @media(max-width: 1345px){
         > h2{
            margin-top: 15px;
            margin-bottom: 7px;
        }
    }

    @media(max-width: 420px){
        padding: 15px;
    }

`;
export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;

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

    @media(max-width: 1345px){
        font-size: 17px;

        >span{
            margin-left: 7px;
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

@media(max-width: 1345px){
        display: flex;
        flex-direction: column;
    }

`;