import styled from "styled-components";

export const Container = styled.nav`
  height: 50px;
  padding: 0 3rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.whiteGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  cursor: pointer;

  & :hover {
    color: ${({theme}) => theme.colors.purple};
  }
`;
