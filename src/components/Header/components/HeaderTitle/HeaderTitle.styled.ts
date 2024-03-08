import { device } from "styles/sizes";
import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderTitle = styled(motion.h1)`
  display: flex;
  align-items: center;
  font-weight: 500;

  @media ${device.mobile} {
    font-size: 1.5em;
  }
`;
