import { motion } from "framer-motion";
import styled from "styled-components";

export const AnswerWrapper = styled(motion.div)`
  padding: 16px 24px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 16px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: opacity 0.3s ease;
  user-select: none;
  flex: 1;
  min-width: 200px;

  &:hover {
    opacity: 0.8;
  }
`;

export const AnswerInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
  user-select: none;
`;

export const AnswerLabel = styled.label`
  cursor: pointer;
`;