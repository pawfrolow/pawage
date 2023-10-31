import { device } from "@/styles/sizes";
import styled from "styled-components";

export const BlockSubtitleWrapper = styled.h4`
  text-align: center;
  margin-bottom: 16px;

  @media ${device.mobile} {
    font-size: 1em;
  }
`;