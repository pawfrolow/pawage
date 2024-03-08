import { device } from "styles/sizes"
import styled from "styled-components"

export const AgeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  margin: 8px 24px;

  @media ${device.mobile} {
    width: 60px;
  }
`

export const AgeNumber = styled.div`
  display: flex;
`

export const AgeDigit = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 32px;
  text-align: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  width: 36px;
  border-radius: 4px;
  padding: 8px;
  position: relative;
  box-shadow: 0px 4px 4px 2px rgba(0,0,0,0.2);
  &:first-child {
    margin-right: 8px;
  }
  &:nth-child(n + 3) {
    margin-left: 8px;
  }
  &:after {
    content: '';
    position: absolute;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: rgba(0,0,0,0.1);
    width: 100%;
    height: 50%;
    top: 0;
    left: 0;
    right: 0;
  }
`

export const AgeUnit = styled.div`
  margin-top: 8px;
  text-align: center;
  width: 100%;
  font-weight: 500;
`