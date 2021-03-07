import styled from 'styled-components';

interface IContainerProps {
    color: string
}

export const Container = styled.div<IContainerProps>`
    width: 32%;
    height: 150px;
    margin: 10px 0; 
    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
    > img{
        height: 110%;
        position: absolute;
        top: -10px;
        align-self: flex-end;
        opacity: .3;
    }
    >span {
        font-size: 18px;
        font-weight: 500;
    }
    >small{
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }
`;