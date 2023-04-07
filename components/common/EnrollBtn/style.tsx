import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 1rem;
  background-color: ${({theme}) => theme.colors.purple};
  color: ${({theme}) => theme.colors.white};
  padding: 8px 1rem;
  line-height: 1rem;
`;
