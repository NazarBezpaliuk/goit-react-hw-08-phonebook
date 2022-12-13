import styled from 'styled-components';

export const StyledFilterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
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
`;
