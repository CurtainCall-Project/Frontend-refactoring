import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media ${({theme}) => theme.device.tablet} {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 16rem;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    background-color: ${({theme}) => theme.colors.navGray};
  }

  @media ${({theme}) => theme.device.mobile} {
    font-size: ${({theme}) => theme.fontSize.xxs};
  }
`;

export const CloseBtn = styled.button`
  align-self: end;
  background-color: transparent;
  border: none;
`;

export const Title = styled.span`
  margin: 8px 0 6px;
  cursor: default;
`;

export const List = styled.ul`
  line-height: 1.2rem;
  padding: 6px;
`;

export const Name = styled.li`
  &:last-child {
    margin-bottom: 6px;
  }

  &:hover {
    color: ${({theme}) => theme.colors.purple};
  }
`;

export const LoginLink = styled(Link)`
  margin-top: 6px;
  &:hover {
    color: ${({theme}) => theme.colors.purple};
  }
`;
