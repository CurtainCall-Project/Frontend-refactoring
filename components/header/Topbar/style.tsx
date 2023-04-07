import Image from "next/image";
import styled from "styled-components";

export const Container = styled.header`
  height: 3rem;
  padding: 0 5rem;
  background-color: ${({theme}) => theme.colors.lightPurple};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 400px;
`;

export const Logo = styled(Image)`
  display: block;
`;
