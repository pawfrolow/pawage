import { device } from "@/styles/sizes";
import styled from "styled-components";

export const AgeInputWrapper = styled.div`
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

  @media ${device.mobile} {
    width: 100%:
  }
`

export const Range = styled.input`
  width: 350px;
  align-self: center;
  margin: 24px 0 0 0;
  cursor: pointer;
  -webkit-appearance: none;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.dark}, 0px 0px 1px ${({ theme }) => theme.colors.dark};
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 1.3px;
    border: 0.2px solid ${({ theme }) => theme.colors.dark};
  }
  &::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.dark}, 0px 0px 1px ${({ theme }) => theme.colors.dark};
    border: 1px solid ${({ theme }) => theme.colors.dark};
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: ${({ theme }) => theme.colors.primary};
  }
  &::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.dark}, 0px 0px 1px ${({ theme }) => theme.colors.dark};
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 1.3px;
    border: 0.2px solid ${({ theme }) => theme.colors.dark};
  }
  &::-moz-range-thumb {
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.dark}, 0px 0px 1px ${({ theme }) => theme.colors.dark};
    border: 1px solid ${({ theme }) => theme.colors.dark};
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: ${({ theme }) => theme.colors.primary};
    border: 0.2px solid ${({ theme }) => theme.colors.dark};
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.dark}, 0px 0px 1px ${({ theme }) => theme.colors.dark};
  }
  &::-ms-fill-upper {
    background: ${({ theme }) => theme.colors.primary};
    border: 0.2px solid ${({ theme }) => theme.colors.dark};
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.dark}, 0px 0px 1px ${({ theme }) => theme.colors.dark};
  }
  &::-ms-thumb {
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.dark}, 0px 0px 1px ${({ theme }) => theme.colors.dark};
    border: 1px solid ${({ theme }) => theme.colors.dark};
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: ${({ theme }) => theme.colors.primary};
  }
  &:focus::-ms-fill-upper {
    background: ${({ theme }) => theme.colors.primary};
  }

  @media ${device.mobile} {
    width: 100%:
  }
`