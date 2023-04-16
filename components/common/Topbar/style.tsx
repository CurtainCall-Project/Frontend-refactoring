import Image from "next/image";
import styled from "styled-components";

export const Container = styled.header`
  height: 3rem;
  padding: 0 8rem;
  background-color: ${({theme}) => theme.colors.lightPurple};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({theme}) => theme.device.tablet} {
    padding: 0 3em;
  }
`;

export const RightWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 400px;
  gap: 10px;

  span {
    white-space: nowrap;
  }

  @media ${({theme}) => theme.device.tablet} {
    display: none;
  }
`;

export const Logo = styled(Image)`
  display: block;
`;

export const MenuIcon = styled(Image)`
  display: none;

  @media ${({theme}) => theme.device.tablet} {
    display: block;
  }
`;
