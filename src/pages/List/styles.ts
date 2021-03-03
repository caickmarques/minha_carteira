import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div``;
export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    .tag-filter {
        font-size: 18px;
        font-weight: 500px;
        background: none;
        color: ${props => props.theme.colors.white};
        margin: 0 10px;
        transition: opacity .3s;
        opacity: .4;

        &:hover{
            opacity: .7;
        }
    }

    .recurrent::after{
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-radius: 5px;
            border: 8px solid ${props => props.theme.colors.sucess};
        }

    .eventual::after{
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-radius: 5px;
            border: 8px solid ${props => props.theme.colors.warning};
        }
    
    .tag-actived{
        opacity: 1;
    }

`;