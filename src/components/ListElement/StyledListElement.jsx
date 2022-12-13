import styled from 'styled-components';

export const StyledLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 20px;
    background-color: #f3f98c;
    border-color: #4eafd0;
    border-radius: 5px;
    transition: ease-in 100ms;
    &:hover {
        background-color: #8cdcf9;
    }
    button {
        display: flex;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #4eafd0;
        background-color: #81f9af;
        color: #000602;
        cursor: pointer;
        transition: ease-in 200ms;
        :hover {
            border: 1px solid #000;
            background-color: #ff0801;
            color: white;
        }
    }
`;
