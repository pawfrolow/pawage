import { device } from "@/styles/sizes"
import styled from "styled-components"

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 450px;
`

export const Input = styled.input`
  padding: 16px 24px;
  border-radius: 16px;
  border: 0;
  width: 100%;
  margin-bottom: 24px;
  font-family: 'Montserrat',sans-serif;
  font-size: 1rem;
`

export const InputFieldWrapper = styled.div`
  position: relative;
  align-self: center;
  width: calc(100% - 16px - 16px);
`

export const Error = styled.div`
  position: absolute;
  bottom: 0px;
  left: 24px;
  color: red;
`