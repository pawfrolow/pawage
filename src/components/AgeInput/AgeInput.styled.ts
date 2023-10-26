import styled from "styled-components";

export const AgeInputWrapper = styled.div`
  height: 42px;
  margin-top: 24px;
  width: calc(100% - 16px - 16px);
  max-width: 450px;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export const AgeInputField = styled.input`
  border: 0;
  width: 350px;
  height: 100%;
  padding: 16px 24px;
  border-radius: 16px;
  font-size: 18px;
  text-align: center;
  font-family: 'Montserrat',sans-serif;
  font-size: 1rem;
  align-self: center;
`