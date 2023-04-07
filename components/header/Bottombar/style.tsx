import styled from "styled-components";

export const Container = styled.ul`
  height: 50px;
  padding: 0 5rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.whiteGray};
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  a + a {
    margin-left: 4rem;
  }
`;

export const Name = styled.li`
  display: block;
  line-height: 44px;
  padding: 0 8px;

  &:hover {
    color: ${({theme}) => theme.colors.purple};
  }
`;
