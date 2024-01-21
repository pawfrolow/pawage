import styled from "styled-components";

export const ButtonBack = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 18px;
  margin-left: 16px;
  margin-top: 16px;

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  span {
    margin-right: 8px;
  }
`