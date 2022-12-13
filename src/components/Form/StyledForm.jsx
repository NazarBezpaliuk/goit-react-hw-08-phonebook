import styled from 'styled-components';

export const StyledForm = styled.form`
    background-color: black;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    border: 2px solid red;
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
        border: 1px solid red;
        outline: none;
        transition: box-shadow 300ms linear;
        &:hover {
            box-shadow: 0px 0px 20px 5px red;
        }
    }
    button {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid red;
        background-color: #252525;
        color: #fff;
        cursor: pointer;
        transition: ease-in 200ms;
        &:hover {
            background-color: #757474;
        }
    }
`;
