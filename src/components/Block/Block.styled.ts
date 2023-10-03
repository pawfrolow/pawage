import { device } from "@/styles/sizes";
import styled from "styled-components";

export const BlockWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;

  @media ${device.mobile} {
    padding: 32px 16px;
  }
`