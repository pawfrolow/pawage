import { device } from "@/styles/sizes";
import styled from "styled-components";

export const BlockTitleWrapper = styled.h2`
  text-align: center;
  margin-bottom: 16px;

  @media ${device.mobile} {
    font-size: 1.3em;
  }
`;