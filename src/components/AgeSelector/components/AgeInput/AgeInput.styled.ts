import { device } from "@/styles/sizes";
import styled from "styled-components";

export const AgeInputWrapper = styled.section`
  margin-top: 24px;
  width: calc(100% - 16px - 16px);
  max-width: 450px;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export const Range = styled.input`
  width: 100%;
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

export const RangeWrapper = styled.div`
  width: 350px;
  align-self: center;
  margin: 24px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

export const AgeCell = styled.div`
  color: ${({ theme }) => theme.colors.dark};
`

export const AgeRow = styled.div`
  align-self: center;
  position: relative;
  width: 240px;
  height: 90px;
  
  & > :nth-child(1) {
    position: absolute;
    left: 0;
  }

  & > :nth-child(2) {
    position: absolute;
    right: 0;
  }
`