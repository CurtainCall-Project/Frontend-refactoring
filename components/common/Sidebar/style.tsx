import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div<{isOpen: boolean}>`
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
    right: ${({isOpen}) => (isOpen ? "0" : "-100%")};
    transition: 0.3s;
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

export const Overlay = styled.div<{isOpen: boolean}>`
  display: none;
  @media ${({theme}) => theme.device.tablet} {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    opacity: ${({isOpen}) => (isOpen ? "1" : "0")};
    visibility: ${({isOpen}) => (isOpen ? "visible" : "hidden")};
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
