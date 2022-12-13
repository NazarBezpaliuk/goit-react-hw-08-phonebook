import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  button {
    border: 1px solid rgb(78, 175, 208);
    background-color: rgb(129, 249, 175);
    color: #ffffff;
    cursor: pointer;
    transition: ease-in 200ms;
    :hover {
      border: 1px solid rgb(78, 175, 208);
      background-color: #4ca3e0;
    }
  }
`;
