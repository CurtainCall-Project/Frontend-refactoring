import styled from "styled-components";

export const Nav = styled.nav`
  @media ${({theme}) => theme.device.tablet} {
    display: none;
  }
`;

export const Topbar = styled.ul`
  height: 50px;
  padding: 0 8rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.whiteGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;

  a + a {
    margin-left: 4rem;
  }
`;

export const Title = styled.li`
  display: block;
  line-height: 44px;
  padding: 0 8px;
  cursor: default;

  &:hover {
    color: ${({theme}) => theme.colors.purple};
  }
  &:active {
    color: ${({theme}) => theme.colors.purple};
  }

  &:last-child {
    color: ${({theme}) => theme.colors.lightPurple};
    border-radius: 6px;
    font-weight: 600;

    &:hover {
      background-color: rgba(97, 102, 179, 0.2);
    }
  }
`;
