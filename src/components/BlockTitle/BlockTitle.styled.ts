import { device } from "styles/sizes";
import styled from "styled-components";

export const BlockTitleWrapper = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  font-weight: 500;

  @media ${device.mobile} {
    font-size: 1.3em;
  }
`;