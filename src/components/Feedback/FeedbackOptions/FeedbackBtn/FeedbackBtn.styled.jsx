import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  color: gold;
  border: 1px solid gold;
  border-radius: 4px;
  box-shadow: 2px 2px 3px black;
  cursor: pointer;

  :hover,
  :focus {
    color: teal;
    box-shadow: 1px 1px 2px black;
  }
`;
