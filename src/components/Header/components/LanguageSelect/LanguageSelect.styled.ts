import { motion } from "framer-motion";
import styled from "styled-components";

export const LanguageSelect = styled(motion.div)`
  z-index: 1;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark}
`