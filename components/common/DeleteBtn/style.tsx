import styled from "styled-components";
import {Button} from "../EnrollBtn/style";

export const DeleteButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.whiteGray};
  color: #000;
  line-height: 1rem;
`;
