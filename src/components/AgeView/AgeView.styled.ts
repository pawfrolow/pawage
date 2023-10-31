import { device } from "@/styles/sizes";
import styled from "styled-components";

export const AgeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const BlockWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
  background: ${({ theme }) => theme.colors.background};
  position: relative;

  @media ${device.mobile} {
    padding: 32px 16px;
  }
`

export const ButtonShare = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  position: absolute;
  right: 24px;
  top: -24px;

  &:hover {
    opacity: 0.7;
  }
`