import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({theme}) => theme.colors.lightGray};
  padding: 40px;
  gap: 1rem;
  display: flex;
  justify-content: end;

  @media ${({theme}) => theme.device.tablet} {
    flex-direction: column;
    align-items: end;
  }

  span,
  a {
    color: ${({theme}) => theme.colors.textGray};
  }
`;
