import { device } from "@/styles/sizes";
import styled from "styled-components";

export const BlockWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  position: relative;

  @media ${device.mobile} {
    padding: 0px 16px;
  }
`

export const AgeViewScreen = styled.section`
  margin-top: 16px;
  padding: 48px 24px;
  background: ${({ theme }) => theme.colors.background};
  @media ${device.mobile} {
    padding: 32px 16px;
  }
`

export const ButtonShare = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  transition-property: opacity, background;
  position: absolute;
  right: 24px;
  top: -24px;
  width: 36px;
  height: 36px;

  svg {
    margin-top: 2px;
  }

  &:hover {
    opacity: 0.7;
    background: rgba(0, 0, 0, 0.2);
  }
`