import styled from 'styled-components';

export const StyledForm = styled.form`
    background-color: #f3f98c;
    display: flex;
    gap: 20px;
    align-items: flex-end;
    flex-basis: 33%;
    justify-content: space-between;
    flex-wrap: wrap;
    border: 2px solid #4eafd0;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 20px;
    label {
        display: block;
        margin-bottom: 10px;
    }
    input {
        display: block;
        height: 25px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #4eafd0;
        outline: none;
        &:focus {
            border: 1px solid #9a9483;
        }
    }
    button {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #4eafd0;
        background-color: #81f9af;
        color: #000602;
        cursor: pointer;
        transition: ease-in 200ms;
        :hover {
            border: 1px solid #e5dcc3;
            background-color: #019633;
            color: #fff;
        }
    }
`;