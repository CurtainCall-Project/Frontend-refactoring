import styled from "styled-components";

export const Form = styled.form`
  background-color: #fff;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  line-height: 1.6%;
  max-width: 300px;
  border: 1px solid ${({theme}) => theme.colors.gray};
`;

export const Input = styled.input`
  margin-left: 2px;
  border: none;
  font-size: 1rem;
  width: 100%;
  outline: none;
`;
